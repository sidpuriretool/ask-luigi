export type CodexEvent =
  | { type: "plan"; content: string }
  | { type: "file_change"; path: string; status: string }
  | { type: "message"; content: string }
  | { type: "error"; message: string }
  | { type: "done" };

export function toSseEvent(event: CodexEvent): string {
  return `data: ${JSON.stringify(event)}\n\n`;
}
