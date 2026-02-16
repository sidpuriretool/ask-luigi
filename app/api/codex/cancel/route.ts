import { NextResponse } from "next/server";
import { cancelCodexRun } from "@/lib/codex";

export async function POST() {
  try {
    const result = cancelCodexRun();
    return NextResponse.json(result);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to cancel Codex run.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
