import Codex from "@openai/codex-sdk";

// Module-level state
let client: Codex | null = null;
let activeThread: any | null = null;
let isRunning = false;

function getClient(): Codex {
  if (!client) {
    client = new Codex({ apiKey: process.env.OPENAI_API_KEY });
  }
  return client;
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
 * - skipGitRepoCheck = true because we manage git ourselves.
 */
export async function* runCodex(prompt: string): AsyncGenerator<CodexEvent> {
  if (isRunning) {
    yield { type: "error", message: "A Codex run is already in progress." };
    return;
  }

  isRunning = true;

  try {
    const codex = getClient();

    // Start a new thread or reuse existing one
    if (!activeThread) {
      activeThread = await codex.startThread({
        workingDirectory: process.cwd(),
        skipGitRepoCheck: true,
        sandboxMode: "workspace-write",
      });
    }

    const stream = activeThread.runStreamed(prompt);

    for await (const event of stream) {
      // Classify events into our simplified types.
      // The exact event shapes come from the Codex SDK — adapt as needed
      // based on what @openai/codex-sdk actually emits.

      if (event.type === "reasoning" || event.type === "thinking") {
        yield { type: "plan", content: event.content || event.text || "" };
      }

      if (event.type === "item.completed" && event.item?.type === "file_change") {
        yield {
          type: "file_change",
          path: event.item.path || event.item.file || "unknown",
          status: event.item.status || "modified",
        };
      }

      if (event.type === "item.completed" && event.item?.type === "agent_message") {
        yield { type: "message", content: event.item.content || "" };
      }

      if (event.type === "agent_message" || event.type === "message") {
        yield { type: "message", content: event.content || event.text || "" };
      }

      // Add more event type mappings as discovered from SDK behavior
    }

    yield { type: "done" };
  } catch (err: any) {
    yield { type: "error", message: err.message || "Codex run failed" };
  } finally {
    isRunning = false;
  }
}

/**
 * Reset the thread (e.g., after deploying, start fresh).
 */
export function resetThread() {
  activeThread = null;
}

/**
 * Check if a run is in progress (used by git routes to prevent concurrent operations).
 */
export function isCodexRunning(): boolean {
  return isRunning;
}
