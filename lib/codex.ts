import { Codex, Thread } from "@openai/codex-sdk";
import path from "path";

// Module-level state
let client: Codex | null = null;
let activeThread: Thread | null = null;
let isRunning = false;

function getClient(): Codex {
  if (!client) {
    // Set CODEX_HOME like html-campaign does
    const codexHome = path.join(process.cwd(), ".codex");
    process.env.CODEX_HOME = codexHome;
    // Use same pattern as html-campaign: new Codex() with no config
    client = new Codex();
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
      activeThread = codex.startThread({
        workingDirectory: process.cwd(),
        skipGitRepoCheck: true,
        sandboxMode: "workspace-write",
      });
    }

    const streamedTurn = await activeThread.runStreamed(prompt);

    for await (const event of streamedTurn.events) {
      // Classify events into our simplified types based on Codex SDK events

      if (event.type === "item.completed" && event.item) {
        if (event.item.type === "reasoning") {
          yield { type: "plan", content: event.item.text };
        } else if (event.item.type === "agent_message") {
          yield { type: "message", content: event.item.text };
        } else if (event.item.type === "file_change") {
          // Yield a file change event for each change in the patch
          for (const change of event.item.changes) {
            yield {
              type: "file_change",
              path: change.path,
              status: change.kind,
            };
          }
        }
      }

      if (event.type === "error") {
        yield { type: "error", message: event.message };
      }
    }

    yield { type: "done" };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Codex run failed";
    yield { type: "error", message };
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
