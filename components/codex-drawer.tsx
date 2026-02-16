"use client";

import { useState, useEffect } from "react";
import { X, Loader2, GitBranch, Rocket } from "lucide-react";

type FileChange = {
  path: string;
  status: string;
};

type Status = "idle" | "running" | "done" | "error";

export function CodexDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [lastPrompt, setLastPrompt] = useState(""); // Keep last successful prompt for git ops
  const [plan, setPlan] = useState("");
  const [fileChanges, setFileChanges] = useState<FileChange[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [gitBranch, setGitBranch] = useState<string | null>(null);
  const [savedBranch, setSavedBranch] = useState<string | null>(null);

  // Fetch git status on mount
  useEffect(() => {
    fetchGitStatus();
  }, []);

  const fetchGitStatus = async () => {
    try {
      const res = await fetch("/api/git/status");
      const data = await res.json();
      if (data.branch) {
        setGitBranch(data.branch);
      }
    } catch (err) {
      console.error("Failed to fetch git status:", err);
    }
  };

  const handleRun = async () => {
    if (!prompt.trim() || status === "running") return;

    setStatus("running");
    setError(null);
    setPlan("");
    setFileChanges([]);

    try {
      const res = await fetch("/api/codex/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const event = JSON.parse(line.slice(6));

            if (event.type === "plan") {
              setPlan((prev) => prev + event.content);
            } else if (event.type === "file_change") {
              setFileChanges((prev) => [
                ...prev,
                { path: event.path, status: event.status },
              ]);
            } else if (event.type === "message") {
              setPlan((prev) => prev + "\n" + event.content);
            } else if (event.type === "error") {
              setError(event.message);
              setStatus("error");
            } else if (event.type === "done") {
              setStatus("done");
              setLastPrompt(prompt); // Save prompt before clearing
              setPrompt("");
            }
          }
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to run Codex";
      setError(message);
      setStatus("error");
    }
  };

  const handleSaveToBranch = async () => {
    try {
      const res = await fetch("/api/git/branch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: lastPrompt }),
      });

      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setSavedBranch(data.branch);
        await fetchGitStatus();
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to save to branch";
      setError(message);
    }
  };

  const handleDeploy = async () => {
    if (!savedBranch) return;

    const confirmed = confirm(
      `Merge ${savedBranch} into main and push?\n\nThis will deploy your changes.`
    );
    if (!confirmed) return;

    try {
      const res = await fetch("/api/git/deploy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ branch: savedBranch }),
      });

      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        alert("Deployed successfully!");
        setSavedBranch(null);
        await fetchGitStatus();
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to deploy";
      setError(message);
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 flex items-center gap-2"
      >
        <span className="text-xl">🔧</span>
        <span className="font-medium">Codex</span>
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-white border-l border-gray-200 shadow-2xl transform transition-transform duration-300 z-40 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Codex Agent</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Prompt Input */}
          <div className="space-y-2">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt..."
              className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              disabled={status === "running"}
            />
            <button
              onClick={handleRun}
              disabled={status === "running" || !prompt.trim()}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "running" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Running...
                </>
              ) : (
                "Run"
              )}
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
              {error}
            </div>
          )}

          {/* Plan */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Plan
            </h3>
            <div className="bg-gray-50 rounded-md p-3 min-h-[100px] max-h-[200px] overflow-y-auto">
              {plan ? (
                <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono">
                  {plan}
                </pre>
              ) : (
                <p className="text-xs text-gray-500">
                  Run a prompt to see the plan.
                </p>
              )}
            </div>
          </div>

          {/* File Changes */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              File Changes
            </h3>
            <div className="space-y-1">
              {fileChanges.length > 0 ? (
                fileChanges.map((change, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs bg-gray-50 rounded px-2 py-1.5"
                  >
                    <span className="text-gray-700 truncate">{change.path}</span>
                    <span className="text-gray-500 bg-gray-200 px-2 py-0.5 rounded text-[10px] uppercase">
                      {change.status}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-xs text-gray-500 py-2">No changes yet.</p>
              )}
            </div>
          </div>

          {/* Git Controls */}
          {status === "done" && (
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <GitBranch className="w-4 h-4" />
                <span>Current: {gitBranch || "unknown"}</span>
              </div>

              {savedBranch && (
                <div className="text-xs text-green-700 bg-green-50 p-2 rounded">
                  Saved to branch: <span className="font-mono">{savedBranch}</span>
                </div>
              )}

              <button
                onClick={handleSaveToBranch}
                disabled={!!savedBranch}
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
              >
                <GitBranch className="w-4 h-4" />
                Save to Branch
              </button>

              {savedBranch && (
                <button
                  onClick={handleDeploy}
                  className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 flex items-center justify-center gap-2 text-sm"
                >
                  <Rocket className="w-4 h-4" />
                  Deploy to Main
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-20 z-30"
        />
      )}
    </>
  );
}
