import { randomUUID } from "crypto";
import Database from "better-sqlite3";
import path from "path";
import type { SessionFileChange, SessionPrompt, StoredSession } from "@/lib/types";

type SessionRow = {
  id: string;
  user_id: string;
  thread_id: string | null;
  prompts: string;
  file_changes: string;
  branch_name: string | null;
  deployed: number;
  created_at: string;
  updated_at: string;
};

const db = new Database(path.join(process.cwd(), "ask-luigi.sqlite"));

db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    thread_id TEXT,
    prompts TEXT NOT NULL DEFAULT '[]',
    file_changes TEXT NOT NULL DEFAULT '[]',
    branch_name TEXT,
    deployed INTEGER NOT NULL DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
  CREATE INDEX IF NOT EXISTS idx_sessions_updated_at ON sessions(updated_at DESC);
`);

function safeParse<T>(value: string): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return [] as T;
  }
}

function toStoredSession(row: SessionRow): StoredSession {
  return {
    id: row.id,
    user_id: row.user_id,
    thread_id: row.thread_id,
    prompts: safeParse<SessionPrompt[]>(row.prompts),
    file_changes: safeParse<SessionFileChange[]>(row.file_changes),
    branch_name: row.branch_name,
    deployed: Boolean(row.deployed),
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

export function createSession(userId: string): { id: string } {
  const id = randomUUID();

  db.prepare(
    `INSERT INTO sessions (id, user_id, prompts, file_changes) VALUES (?, ?, '[]', '[]')`
  ).run(id, userId);

  return { id };
}

export function listSessionsForUser(userId: string): StoredSession[] {
  const rows = db
    .prepare(
      `SELECT id, user_id, thread_id, prompts, file_changes, branch_name, deployed, created_at, updated_at
       FROM sessions
       WHERE user_id = ?
       ORDER BY updated_at DESC`
    )
    .all(userId) as SessionRow[];

  return rows.map(toStoredSession);
}

export function getSessionByIdForUser(id: string, userId: string): StoredSession | null {
  const row = db
    .prepare(
      `SELECT id, user_id, thread_id, prompts, file_changes, branch_name, deployed, created_at, updated_at
       FROM sessions
       WHERE id = ? AND user_id = ?`
    )
    .get(id, userId) as SessionRow | undefined;

  if (!row) {
    return null;
  }

  return toStoredSession(row);
}

export function updateSessionAfterRun(options: {
  sessionId: string;
  userId: string;
  prompt: string;
  fileChanges: SessionFileChange[];
  threadId: string | null;
}) {
  const session = getSessionByIdForUser(options.sessionId, options.userId);
  if (!session) {
    throw new Error("Session not found.");
  }

  const prompts = [
    ...session.prompts,
    {
      prompt: options.prompt,
      timestamp: new Date().toISOString(),
    },
  ];

  const mergedChanges = new Map<string, string>();
  for (const change of session.file_changes) {
    mergedChanges.set(change.path, change.status);
  }
  for (const change of options.fileChanges) {
    mergedChanges.set(change.path, change.status);
  }

  const serializedChanges: SessionFileChange[] = Array.from(mergedChanges.entries()).map(
    ([path, status]) => ({ path, status })
  );

  db.prepare(
    `UPDATE sessions
     SET prompts = ?,
         file_changes = ?,
         thread_id = COALESCE(?, thread_id),
         updated_at = datetime('now')
     WHERE id = ? AND user_id = ?`
  ).run(
    JSON.stringify(prompts),
    JSON.stringify(serializedChanges),
    options.threadId,
    options.sessionId,
    options.userId
  );
}

export function setSessionBranchName(options: {
  sessionId: string;
  userId: string;
  branchName: string;
}) {
  db.prepare(
    `UPDATE sessions
     SET branch_name = ?,
         updated_at = datetime('now')
     WHERE id = ? AND user_id = ?`
  ).run(options.branchName, options.sessionId, options.userId);
}

export function markSessionDeployed(options: {
  sessionId: string;
  userId: string;
  branchName: string;
}) {
  db.prepare(
    `UPDATE sessions
     SET deployed = 1,
         branch_name = ?,
         updated_at = datetime('now')
     WHERE id = ? AND user_id = ?`
  ).run(options.branchName, options.sessionId, options.userId);
}

export default db;
