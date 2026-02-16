import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth";
import { getSessionByIdForUser } from "@/lib/db";

export const dynamic = "force-dynamic";

type SessionDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function SessionDetailPage({ params }: SessionDetailPageProps) {
  const { id } = await params;
  const auth = await getAuthSession();

  if (!auth?.user?.id) {
    redirect("/api/auth/signin?callbackUrl=/");
  }

  const session = getSessionByIdForUser(id, auth.user.id);
  if (!session) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Session {session.id.slice(0, 8)}</h1>
          <p className="text-sm text-slate-600">Prompt history, file changes, and git status.</p>
        </div>
        <Link href={`/site?sessionId=${session.id}&drawer=open`} className="rounded-md bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-700">
          Open Site + Drawer
        </Link>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm">
          <p className="text-slate-500">Branch</p>
          <p className="font-medium text-slate-900">{session.branch_name ?? "Not saved"}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm">
          <p className="text-slate-500">Deployed</p>
          <p className="font-medium text-slate-900">{session.deployed ? "Yes" : "No"}</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm">
          <p className="text-slate-500">Updated</p>
          <p className="font-medium text-slate-900">{new Date(session.updated_at).toLocaleString()}</p>
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-sm font-semibold tracking-wide text-slate-700">PROMPT HISTORY</h2>
        {session.prompts.length === 0 ? (
          <p className="text-sm text-slate-500">No prompts recorded yet.</p>
        ) : (
          <ul className="space-y-2 text-sm text-slate-700">
            {session.prompts.map((prompt) => (
              <li key={`${prompt.timestamp}-${prompt.prompt.slice(0, 12)}`} className="rounded-md bg-slate-50 p-3">
                <p className="mb-1 text-xs text-slate-500">{new Date(prompt.timestamp).toLocaleString()}</p>
                <p>{prompt.prompt}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-sm font-semibold tracking-wide text-slate-700">FILE CHANGES</h2>
        {session.file_changes.length === 0 ? (
          <p className="text-sm text-slate-500">No file changes recorded yet.</p>
        ) : (
          <ul className="space-y-2 text-sm text-slate-700">
            {session.file_changes.map((change) => (
              <li key={change.path} className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
                <span className="font-mono text-xs text-slate-700">{change.path}</span>
                <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs text-slate-700">
                  {change.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
