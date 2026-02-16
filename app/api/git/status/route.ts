import { NextResponse } from "next/server";
import { getStatus } from "@/lib/git";

export async function GET() {
  try {
    const status = await getStatus();
    return NextResponse.json(status);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to get git status";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
