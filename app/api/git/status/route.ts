import { NextResponse } from "next/server";
import { getStatus } from "@/lib/git";

export async function GET() {
  try {
    const status = await getStatus();
    return NextResponse.json(status);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to get git status" }, { status: 500 });
  }
}
