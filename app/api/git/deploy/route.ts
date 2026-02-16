import { NextRequest, NextResponse } from "next/server";
import { deployToMain } from "@/lib/git";
import { resetThread } from "@/lib/codex";

export async function POST(req: NextRequest) {
  try {
    const { branch } = await req.json();
    
    if (!branch || typeof branch !== "string") {
      return NextResponse.json({ error: "branch is required" }, { status: 400 });
    }

    const result = await deployToMain(branch);
    resetThread();
    
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to deploy" }, { status: 500 });
  }
}
