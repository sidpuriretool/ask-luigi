import { NextRequest, NextResponse } from "next/server";
import { createBranchAndCommit } from "@/lib/git";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "prompt is required" }, { status: 400 });
    }

    const result = await createBranchAndCommit(prompt);
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to create branch" }, { status: 500 });
  }
}
