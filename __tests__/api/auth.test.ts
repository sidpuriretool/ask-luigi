import { describe, expect, it, vi, beforeEach } from "vitest";

const mockGetServerSession = vi.fn();
vi.mock("next-auth", () => ({
  getServerSession: (opts: unknown) => mockGetServerSession(opts),
}));

vi.mock("@/lib/db", () => ({
  getDb: vi.fn(),
}));

describe("Auth protection", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("POST /api/orders returns 401 when no session", async () => {
    mockGetServerSession.mockResolvedValueOnce(null);
    const { POST } = await import("@/app/api/orders/route");
    const req = new Request("http://localhost/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "x",
        email: "x@x.com",
        address: "x",
        items: [{ headphoneId: 1, quantity: 1 }],
        subtotal: 99,
      }),
    });
    const res = await POST(req as never);
    expect(res.status).toBe(401);
    expect(mockGetServerSession).toHaveBeenCalled();
  });
});
