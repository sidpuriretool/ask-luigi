# Programmatic Codex Usage

askLuigi uses the **Codex SDK** on the server to run prompts and stream events to the client. The Codex drawer in the UI is the front-end for this API; all programmatic use of Codex happens server-side.

## Where Codex is used

- **`lib/codex.ts`** – Core SDK wrapper:
  - `runCodex(prompt)` – Async generator that yields `CodexEvent` objects (plan, file_change, message, error, done). Creates/reuses a thread, applies guarded prompts, and restores protected files after each run.
  - `cancelCodexRun()` – Writes a cancel request and aborts the active run so the stream stops.
- **`app/api/codex/run/route.ts`** – `POST /api/codex/run`: accepts `{ prompt }`, calls `runCodex(prompt)`, and streams events as SSE (`data: {...}\n\n`).
- **`app/api/codex/cancel/route.ts`** – `POST /api/codex/cancel`: calls `cancelCodexRun()` and returns `{ canceled, message }`.

## Flow

1. Client sends a prompt to `POST /api/codex/run` with a JSON body.
2. The route calls `runCodex(prompt)` from `lib/codex.ts`.
3. The route streams each event as server-sent events; the Codex drawer reads the stream and updates plan text and file changes.
4. To cancel a run, the client calls `POST /api/codex/cancel`; the run loop checks a cancel file and aborts the active run.

The Codex SDK is used **server-side only**; the drawer is the UI that consumes the streamed API.
