import simpleGit, { SimpleGit } from "simple-git";
import { isCodexRunning } from "./codex";

const git: SimpleGit = simpleGit(process.cwd());

function assertNotRunning() {
  if (isCodexRunning()) {
    throw new Error("Cannot perform git operations while Codex is running.");
  }
}

export async function getStatus() {
  const status = await git.status();
  const log = await git.log({ maxCount: 1 });
  return {
    branch: status.current,
    dirty: status.files.map((f) => f.path),
    lastCommit: log.latest
      ? { message: log.latest.message, hash: log.latest.hash.slice(0, 7) }
      : null,
  };
}

export async function createBranchAndCommit(prompt: string) {
  assertNotRunning();

  const branchName = `codex/${Date.now()}`;
  const commitMessage = `codex: ${prompt.slice(0, 80)}`;

  await git.checkoutLocalBranch(branchName);
  await git.add(".");
  await git.commit(commitMessage);
  await git.push("origin", branchName, ["--set-upstream"]);

  return { branch: branchName, commitMessage };
}

export async function deployToMain(branchName: string) {
  assertNotRunning();

  if (!branchName || branchName === "main" || branchName === "master") {
    throw new Error("Invalid branch for deploy.");
  }

  await git.checkout("main");
  await git.merge([branchName]);
  await git.push("origin", "main");

  return { merged: branchName, target: "main" };
}
