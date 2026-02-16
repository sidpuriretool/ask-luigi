import { NextRequest, NextResponse } from "next/server";
import { requireUserId } from "@/lib/auth";
import { getSessionByIdForUser } from "@/lib/db";

export const runtime = "nodejs";

type SessionRouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_req: NextRequest, { params }: SessionRouteContext) {
  try {
    const userId = await requireUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const session = getSessionByIdForUser(id, userId);

    if (!session) {
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    }

    return NextResponse.json(session);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to load session" },
      { status: 500 }
    );
  }
}
