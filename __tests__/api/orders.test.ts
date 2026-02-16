import { describe, expect, it, vi, beforeEach } from "vitest";

const mockGetServerSession = vi.fn();
vi.mock("next-auth", () => ({
  getServerSession: (opts: unknown) => mockGetServerSession(opts),
}));

const mockGetDb = vi.fn();
vi.mock("@/lib/db", () => ({
  getDb: () => mockGetDb(),
}));

async function importPost() {
  const mod = await import("@/app/api/orders/route");
  return mod.POST;
}

describe("POST /api/orders", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockGetDb.mockReturnValue({
      prepare: vi.fn(() => ({
        run: vi.fn(() => ({ lastInsertRowid: 99 })),
      })),
    });
  });

  it("returns 401 when not authenticated", async () => {
    mockGetServerSession.mockResolvedValueOnce(null);
    const POST = await importPost();
    const req = new Request("http://localhost/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Alice",
        email: "a@b.com",
        address: "123 Main St",
        items: [{ headphoneId: 1, quantity: 2 }],
        subtotal: 199.98,
      }),
    });
    const res = await POST(req as never);
    expect(res.status).toBe(401);
    const json = await res.json();
    expect(json.error).toBe("Unauthorized");
  });

  it("returns 201 with ok and orderId when authenticated and body valid", async () => {
    mockGetServerSession.mockResolvedValueOnce({
      user: { id: "1", email: "a@b.com", name: "Alice" },
    });
    const POST = await importPost();
    const req = new Request("http://localhost/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Alice",
        email: "a@b.com",
        address: "123 Main St",
        items: [{ headphoneId: 1, quantity: 2 }],
        subtotal: 199.98,
      }),
    });
    const res = await POST(req as never);
    expect(res.status).toBe(201);
    const json = await res.json();
    expect(json.ok).toBe(true);
    expect(typeof json.orderId).toBe("number");
  });

  it("returns 400 when body is invalid", async () => {
    mockGetServerSession.mockResolvedValueOnce({
      user: { id: "1", email: "a@b.com" },
    });
    const POST = await importPost();
    const req = new Request("http://localhost/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Alice" }),
    });
    const res = await POST(req as never);
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBeDefined();
  });
});
