"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, X } from "lucide-react";

type FileChange = {
  path: string;
  status: string;
};

type Status = "idle" | "running" | "done" | "error";

type TurnStatus = "running" | "done" | "error";

type ConversationTurn = {
  id: number;
  prompt: string;
  assistant: string;
  fileChanges: FileChange[];
  status: TurnStatus;
  error?: string;
};

export function CodexDrawer() {
  const router = useRouter();
  const drawerRef = useRef<HTMLDetailsElement | null>(null);
  const runControllerRef = useRef<AbortController | null>(null);
  const userCanceledRef = useRef(false);
  const activeTurnIdRef = useRef<number | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  const [prompt, setPrompt] = useState("");
  const [turns, setTurns] = useState<ConversationTurn[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [stallNotice, setStallNotice] = useState<string | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [turns, stallNotice]);

  const updateTurn = (
    turnId: number,
    updater: (turn: ConversationTurn) => ConversationTurn
  ) => {
    setTurns((prev) =>
      prev.map((turn) => (turn.id === turnId ? updater(turn) : turn))
    );
  };

  const appendAssistant = (turnId: number, chunk: string) => {
    updateTurn(turnId, (turn) => ({ ...turn, assistant: turn.assistant + chunk }));
  };

  const handleRun = async () => {
    const submittedPrompt = prompt.trim();
    if (!submittedPrompt || status === "running") return;

    const turnId = Date.now();
    activeTurnIdRef.current = turnId;
    setPrompt("");
    setStatus("running");
    setStallNotice(null);
    setTurns((prev) => [
      ...prev,
      {
        id: turnId,
        prompt: submittedPrompt,
        assistant: "Starting Codex...\n",
        fileChanges: [],
        status: "running",
      },
    ]);

    let lastEventAt = Date.now();
    const heartbeatCheck = setInterval(() => {
      const stalledForMs = Date.now() - lastEventAt;
      if (stalledForMs > 30000) {
        setStallNotice(
          `No updates for ${Math.floor(stalledForMs / 1000)}s. Run may still be working.`
        );
      }
    }, 3000);

    try {
      const controller = new AbortController();
      runControllerRef.current = controller;
      userCanceledRef.current = false;

      const runRequest = async () =>
        fetch("/api/codex/run", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: submittedPrompt }),
          signal: controller.signal,
        });

      let res: Response;
      try {
        res = await runRequest();
      } catch {
        await new Promise((resolve) => setTimeout(resolve, 400));
        res = await runRequest();
      }

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || `Failed to run Codex (${res.status})`);
      }

      if (!res.body) {
        throw new Error("Codex response stream was empty.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let receivedDone = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const chunks = buffer.split("\n\n");
        buffer = chunks.pop() || "";

        for (const line of chunks) {
          if (!line.startsWith("data: ")) continue;
          const event = JSON.parse(line.slice(6));
          lastEventAt = Date.now();
          setStallNotice(null);

          if (event.type === "plan") {
            appendAssistant(turnId, event.content);
          } else if (event.type === "message") {
            updateTurn(turnId, (turn) => ({
              ...turn,
              assistant: turn.assistant.endsWith("\n")
                ? `${turn.assistant}${event.content}\n`
                : `${turn.assistant}\n${event.content}\n`,
            }));
          } else if (event.type === "file_change") {
            updateTurn(turnId, (turn) => ({
              ...turn,
              fileChanges: [
                ...turn.fileChanges,
                { path: event.path, status: event.status },
              ],
            }));
          } else if (event.type === "error") {
            updateTurn(turnId, (turn) => ({
              ...turn,
              status: "error",
              error: event.message || "Codex run failed.",
            }));
            setStatus("error");
          } else if (event.type === "done") {
            receivedDone = true;
            updateTurn(turnId, (turn) => ({ ...turn, status: "done" }));
            setStatus("done");
            router.refresh();
          }
        }
      }

      if (!receivedDone) {
        throw new Error("Connection dropped before completion. Please run again.");
      }
    } catch (err) {
      if (
        err instanceof DOMException &&
        err.name === "AbortError" &&
        userCanceledRef.current
      ) {
        updateTurn(turnId, (turn) => ({
          ...turn,
          status: "error",
          error: "Run canceled.",
        }));
        setStatus("idle");
        return;
      }

      const message =
        err instanceof TypeError
          ? "Network connection to /api/codex/run failed. Check dev server and retry."
          : err instanceof Error
            ? err.message
            : "Failed to run Codex";

      updateTurn(turnId, (turn) => ({ ...turn, status: "error", error: message }));
      setStatus("error");
    } finally {
      clearInterval(heartbeatCheck);
      runControllerRef.current = null;
      userCanceledRef.current = false;
      activeTurnIdRef.current = null;
      setStatus((prev) => (prev === "running" ? "idle" : prev));
    }
  };

  const handleCancel = async () => {
    if (status !== "running") return;

    const activeTurnId = activeTurnIdRef.current;
    userCanceledRef.current = true;
    runControllerRef.current?.abort();
    setStatus("idle");
    setStallNotice(null);

    if (activeTurnId !== null) {
      updateTurn(activeTurnId, (turn) => ({
        ...turn,
        status: "error",
        error: "Run canceled.",
        assistant: `${turn.assistant}\nRun canceled.\n`,
      }));
    }

    try {
      const res = await fetch("/api/codex/cancel", { method: "POST" });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Failed to cancel run.");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to cancel run.";
      if (activeTurnId !== null) {
        updateTurn(activeTurnId, (turn) => ({ ...turn, error: message }));
      }
    }
  };

  return (
    <details ref={drawerRef} className="group">
      <summary className="fixed bottom-4 right-4 z-50 cursor-pointer list-none rounded-full bg-blue-600 px-4 py-3 text-white shadow-lg transition-colors hover:bg-blue-700 [&::-webkit-details-marker]:hidden">
        Codex
      </summary>

      <div className="fixed right-0 top-0 z-40 flex h-full w-[400px] translate-x-full flex-col border-l border-gray-200 bg-white shadow-2xl transition-transform duration-300 group-open:translate-x-0">
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-900">Codex Agent</h2>
          <button
            onClick={() => {
              if (drawerRef.current) drawerRef.current.open = false;
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1 space-y-5 overflow-y-auto p-4">
            {turns.length === 0 ? (
              <div className="rounded-md border border-gray-200 bg-gray-50 p-3 text-sm text-gray-600">
                Start a conversation with Codex. Follow-ups like &quot;revert
                that&quot; work in
                the same thread.
              </div>
            ) : (
              turns.map((turn) => (
                <article key={turn.id} className="space-y-2">
                  <div className="ml-auto max-w-[92%] rounded-lg bg-blue-600 px-3 py-2 text-sm text-white">
                    {turn.prompt}
                  </div>

                  <div className="max-w-[96%] rounded-lg border border-gray-200 bg-gray-50 p-3">
                    <p className="mb-2 text-[11px] uppercase tracking-wide text-gray-500">
                      Codex • {turn.status}
                    </p>
                    <pre className="whitespace-pre-wrap font-mono text-xs text-gray-700">
                      {turn.assistant || "Working..."}
                    </pre>

                    {turn.error && (
                      <div className="mt-3 rounded border border-red-200 bg-red-50 p-2 text-xs text-red-700">
                        {turn.error}
                      </div>
                    )}

                    {turn.fileChanges.length > 0 && (
                      <div className="mt-3 space-y-1">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                          File Changes
                        </p>
                        {turn.fileChanges.map((change, idx) => (
                          <div
                            key={`${turn.id}-${change.path}-${idx}`}
                            className="flex items-center justify-between rounded bg-white px-2 py-1.5 text-xs"
                          >
                            <span className="truncate text-gray-700">{change.path}</span>
                            <span className="rounded bg-gray-200 px-2 py-0.5 text-[10px] uppercase text-gray-600">
                              {change.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-gray-200 p-4">
            <div className="space-y-2">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Tell Codex what to change..."
                className="h-24 w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={status === "running"}
              />

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleRun}
                  disabled={status === "running" || !prompt.trim()}
                  className="flex items-center justify-center gap-2 rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  {status === "running" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Running...
                    </>
                  ) : (
                    "Run"
                  )}
                </button>

                <button
                  onClick={handleCancel}
                  disabled={status !== "running"}
                  className="rounded-md border border-red-300 py-2 text-sm font-medium text-red-700 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>

              {stallNotice && (
                <div className="rounded-md border border-amber-200 bg-amber-50 p-2 text-xs text-amber-800">
                  {stallNotice}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          if (drawerRef.current) drawerRef.current.open = false;
        }}
        className="pointer-events-none fixed inset-0 z-30 bg-black/20 opacity-0 transition-opacity duration-200 group-open:pointer-events-auto group-open:opacity-100"
      />
    </details>
  );
}
