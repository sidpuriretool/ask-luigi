export type SessionPrompt = {
  prompt: string;
  timestamp: string;
};

export type SessionFileChange = {
  path: string;
  status: string;
};

export type StoredSession = {
  id: string;
  user_id: string;
  thread_id: string | null;
  prompts: SessionPrompt[];
  file_changes: SessionFileChange[];
  branch_name: string | null;
  deployed: boolean;
  created_at: string;
  updated_at: string;
};
