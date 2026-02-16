import { Codex, Thread } from "@openai/codex-sdk";
import path from "path";
import fs from "fs";

// Module-level state
let client: Codex | null = null;
let activeThread: Thread | null = null;
let isRunning = false;
let activeRunAbortController: AbortController | null = null;
let threadRunCount = 0;
const MAX_RUNS_PER_THREAD = 5;
const CODEX_META_DIR = path.join(process.cwd(), ".codex");
const CANCEL_REQUEST_PATH = path.join(CODEX_META_DIR, "cancel-request");
const EDITABLE_FILES = [
  "app/site/page.tsx",
  "app/site/product/[id]/page.tsx",
  "app/site/cart/page.tsx",
  "app/site/checkout/page.tsx",
  "components/headphone-card.tsx",
  "components/site-header.tsx",
  "components/site-footer.tsx",
  "data/headphones.ts",
  "app/globals.css",
  "public/headphones",
] as const;
const GUARDED_FILES = [
  "app/page.tsx",
  "app/layout.tsx",
  "app/error.tsx",
  "app/global-error.tsx",
  "app/api/codex/run/route.ts",
  "components/codex-drawer.tsx",
  "components/cart-provider.tsx",
  "components/add-to-cart-button.tsx",
  "lib/codex.ts",
  "lib/db.ts",
  "lib/auth.ts",
  "data/ask-luigi.db",
] as const;

type FileSnapshot = {
  relativePath: string;
  content: string | null;
};

function getClient(): Codex {
  if (!client) {
    // Set CODEX_HOME like html-campaign does
    ensureCodexMetaDir();
    process.env.CODEX_HOME = CODEX_META_DIR;
    // Pass API key explicitly so Codex SDK can authenticate
    client = new Codex({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return client;
}

function ensureCodexMetaDir() {
  if (!fs.existsSync(CODEX_META_DIR)) {
    fs.mkdirSync(CODEX_META_DIR, { recursive: true });
  }
}

function isCancelRequested(): boolean {
  return fs.existsSync(CANCEL_REQUEST_PATH);
}

function clearCancelRequest() {
  if (!fs.existsSync(CANCEL_REQUEST_PATH)) return;
  try {
    fs.unlinkSync(CANCEL_REQUEST_PATH);
  } catch {
    // ignore
  }
}

function writeCancelRequest() {
  ensureCodexMetaDir();
  fs.writeFileSync(CANCEL_REQUEST_PATH, `${Date.now()}`, "utf8");
}

function buildGuardedPrompt(userPrompt: string): string {
  return [
    "You are editing the askLuigi website.",
    "",
    "Storefront file map:",
    "- app/site/page.tsx: storefront homepage with product grid.",
    "- app/site/product/[id]/page.tsx: product detail page.",
    "- app/site/cart/page.tsx: cart UI and quantity controls.",
    "- app/site/checkout/page.tsx: mock checkout form and success state.",
    "- components/headphone-card.tsx: reusable product card used in grids.",
    "- components/site-header.tsx: shared top navigation and cart badge.",
    "- components/site-footer.tsx: shared footer.",
    "- data/headphones.ts: product catalog data.",
    "- app/globals.css: global theme styles.",
    "- public/headphones: product images.",
    "",
    "Only edit these paths:",
    ...EDITABLE_FILES.map((file) => `- ${file}`),
    "Never edit, move, delete, or rename any other files.",
    "If the request requires touching other files, explain that limitation instead of editing.",
    "",
    "User request:",
    userPrompt,
  ].join("\n");
}

function snapshotGuardedFiles(): FileSnapshot[] {
  return GUARDED_FILES.map((relativePath) => {
    const absolutePath = path.join(process.cwd(), relativePath);
    if (!fs.existsSync(absolutePath)) {
      return { relativePath, content: null };
    }

    return {
      relativePath,
      content: fs.readFileSync(absolutePath, "utf8"),
    };
  });
}

function restoreGuardedFiles(snapshots: FileSnapshot[]): string[] {
  const restored: string[] = [];

  for (const snapshot of snapshots) {
    if (snapshot.content === null) continue;

    const absolutePath = path.join(process.cwd(), snapshot.relativePath);
    const currentContent = fs.existsSync(absolutePath)
      ? fs.readFileSync(absolutePath, "utf8")
      : null;

    if (currentContent !== snapshot.content) {
      fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
      fs.writeFileSync(absolutePath, snapshot.content, "utf8");
      restored.push(snapshot.relativePath);
    }
  }

  return restored;
}

// Event types the API route will stream to the client
export type CodexEvent =
  | { type: "plan"; content: string }
  | { type: "file_change"; path: string; status: string }
  | { type: "message"; content: string }
  | { type: "error"; message: string }
  | { type: "done" };

/**
 * Run a prompt against the project. Yields CodexEvent objects.
 *
 * - Creates a new thread on first call, reuses it on subsequent calls
 *   so follow-up prompts have context.
 * - workingDirectory = process.cwd() so Codex edits the actual project files.
 * - sandboxMode = "workspace-write" so Codex can modify files.
 */
export async function* runCodex(prompt: string): AsyncGenerator<CodexEvent> {
  if (isRunning) {
    yield { type: "error", message: "A Codex run is already in progress." };
    return;
  }

  isRunning = true;
  clearCancelRequest();
  const runAbortController = new AbortController();
  activeRunAbortController = runAbortController;
  const guardedSnapshots = snapshotGuardedFiles();
  const cancelPoll = setInterval(() => {
    if (isCancelRequested()) {
      runAbortController.abort();
    }
  }, 500);

  try {
    const codex = getClient();
    const guardedPrompt = buildGuardedPrompt(prompt);
    const runStartedAt = Date.now();
    yield { type: "plan", content: "Starting Codex run...\n" };

    // Recycle long-lived threads to keep run latency predictable.
    if (!activeThread || threadRunCount >= MAX_RUNS_PER_THREAD) {
      if (activeThread && threadRunCount >= MAX_RUNS_PER_THREAD) {
        yield {
          type: "plan",
          content: "Refreshing thread context for faster runs...\n",
        };
      }
      activeThread = codex.startThread({
        workingDirectory: process.cwd(),
        sandboxMode: "workspace-write",
      });
      threadRunCount = 0;
    }

    const streamedTurn = await activeThread.runStreamed(guardedPrompt, {
      signal: runAbortController.signal,
    });

    const eventIterator = streamedTurn.events[Symbol.asyncIterator]();

    while (true) {
      const next = await Promise.race<
        | { kind: "event"; result: IteratorResult<unknown> }
        | { kind: "heartbeat" }
      >([
        eventIterator.next().then((result) => ({ kind: "event", result })),
        new Promise<{ kind: "heartbeat" }>((resolve) =>
          setTimeout(() => resolve({ kind: "heartbeat" }), 3000)
        ),
      ]);

      if (next.kind === "heartbeat") {
        const elapsedSeconds = Math.floor((Date.now() - runStartedAt) / 1000);
        yield { type: "plan", content: `Still working... (${elapsedSeconds}s)\n` };
        continue;
      }

      if (next.result.done) break;
      const event = next.result.value as {
        type: string;
        message?: string;
        item?: {
          type?: string;
          text?: string;
          content?: string;
          changes?: { path: string; kind: string }[];
        };
      };

      if (isCancelRequested()) {
        runAbortController.abort();
      }

      // Classify events into our simplified types based on Codex SDK events

      if (event.type === "item.completed" && event.item) {
        if (event.item.type === "reasoning") {
          yield { type: "plan", content: event.item.text ?? "" };
        } else if (event.item.type === "agent_message") {
          yield { type: "message", content: event.item.text ?? "" };
        } else if (event.item.type === "file_change") {
          // Yield a file change event for each change in the patch
          for (const change of event.item.changes ?? []) {
            yield {
              type: "file_change",
              path: change.path,
              status: change.kind,
            };
          }
        }
      }

      if (event.type === "turn.started") {
        yield { type: "plan", content: "Working...\n" };
      }

      if (
        (event.type === "item.started" || event.type === "item.updated") &&
        event.item
      ) {
        const item = event.item as {
          type?: string;
          text?: string;
          content?: string;
        };
        const content = item.text ?? item.content ?? "";
        if (!content) continue;

        if (item.type === "reasoning") {
          yield { type: "plan", content };
        } else if (item.type === "agent_message") {
          yield { type: "message", content };
        }
      }

      if (event.type === "error") {
        yield { type: "error", message: event.message ?? "Codex stream error" };
      }
    }

    const restoredFiles = restoreGuardedFiles(guardedSnapshots);
    if (restoredFiles.length > 0) {
      for (const restoredFile of restoredFiles) {
        yield { type: "file_change", path: restoredFile, status: "restored" };
      }
      yield {
        type: "message",
        content:
          "Protected routing/infrastructure files were restored automatically.",
      };
    }

    threadRunCount += 1;
    yield { type: "done" };
  } catch (err) {
    const restoredFiles = restoreGuardedFiles(guardedSnapshots);
    if (restoredFiles.length > 0) {
      for (const restoredFile of restoredFiles) {
        yield { type: "file_change", path: restoredFile, status: "restored" };
      }
      yield {
        type: "message",
        content:
          "Protected routing/infrastructure files were restored automatically.",
      };
    }

    if (runAbortController.signal.aborted) {
      yield { type: "error", message: "Run canceled." };
      return;
    }

    const message = err instanceof Error ? err.message : "Codex run failed";
    yield { type: "error", message };
  } finally {
    clearInterval(cancelPoll);
    clearCancelRequest();
    if (activeRunAbortController === runAbortController) {
      activeRunAbortController = null;
      isRunning = false;
    }
  }
}

export function cancelCodexRun(): { canceled: boolean; message: string } {
  writeCancelRequest();

  if (activeRunAbortController) {
    activeRunAbortController.abort();
    activeRunAbortController = null;
    isRunning = false;
    return { canceled: true, message: "Cancel requested." };
  }

  return { canceled: true, message: "Cancel request queued." };
}
