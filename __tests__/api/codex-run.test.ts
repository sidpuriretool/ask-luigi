import { describe, expect, it, vi, beforeEach } from "vitest";

async function* mockRunCodexYieldOne() {
  yield { type: "plan", content: "Starting...\n" };
}

const mockRunCodex = vi.fn();
vi.mock("@/lib/codex", () => ({
  runCodex: (prompt: string) => mockRunCodex(prompt),
}));

async function importPost() {
  const mod = await import("@/app/api/codex/run/route");
  return mod.POST;
}

describe("POST /api/codex/run", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 400 when prompt is missing", async () => {
    const POST = await importPost();
    const req = new Request("http://localhost/api/codex/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    const res = await POST(req as never);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBeDefined();
  });

  it("returns 400 when prompt is not a string", async () => {
    const POST = await importPost();
    const req = new Request("http://localhost/api/codex/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: 123 }),
    });
    const res = await POST(req as never);
    expect(res.status).toBe(400);
  });

  it("returns stream with event when prompt is valid", async () => {
    mockRunCodex.mockImplementation(mockRunCodexYieldOne);
    const POST = await importPost();
    const req = new Request("http://localhost/api/codex/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "Add a button" }),
    });
    const res = await POST(req as never);
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("text/event-stream");
    expect(res.body).toBeInstanceOf(ReadableStream);
    const reader = res.body!.getReader();
    const { value } = await reader.read();
    const text = new TextDecoder().decode(value);
    expect(text).toContain("data: ");
    expect(text).toContain("plan");
    expect(text).toContain("Starting");
  });
});
