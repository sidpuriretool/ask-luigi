# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

askLuigi is a single-page headphones eCommerce site with a built-in Codex agent drawer that allows live editing of the website through natural language prompts. Changes are made directly to the local filesystem, with git integration for branching and deployment.

## Key Commands

```bash
# Development
npm run dev              # Start dev server on localhost:3000
npm run build            # Build for production
npm run lint             # Run ESLint

# Testing Codex integration (requires OPENAI_API_KEY in .env.local)
curl -X POST http://localhost:3000/api/codex/run \
  -H "Content-Type: application/json" \
  -d '{"prompt":"Make the hero headline bigger"}' \
  --no-buffer
```

## Architecture

### Core Concept
- **The Website**: Simple Next.js app showing top 10 headphones (`/site`)
- **The Drawer**: Floating Codex UI accessible from any page via bottom-right button
- **The Flow**: Prompt → Codex edits local files → User previews → Git branch → Deploy

### Key Modules

**lib/codex.ts**
- Module-level Codex client and thread management
- `runCodex(prompt)` - Async generator that yields SSE events
- `isCodexRunning()` - Flag checked before git operations
- `resetThread()` - Called after deploy to start fresh
- Thread persists across prompts for context

**lib/git.ts**
- `getStatus()` - Current branch, dirty files, last commit
- `createBranchAndCommit(prompt)` - Creates `codex/<timestamp>` branch
- `deployToMain(branch)` - Merges branch into main
- All functions check `isCodexRunning()` before executing

**components/codex-drawer.tsx**
- Client component with SSE parsing for real-time updates
- Sections: prompt input, plan display, file changes, git controls
- Fixed right sidebar (400px), slides in/out
- Manages local state for plan, file changes, git status

### API Routes

**POST /api/codex/run**
- Accepts `{ prompt: string }`
- Returns SSE stream of CodexEvent objects
- Does NOT abort run if client disconnects

**GET /api/git/status**
- Returns `{ branch, dirty[], lastCommit }`

**POST /api/git/branch**
- Accepts `{ prompt: string }`
- Creates branch, commits all changes, pushes
- Returns `{ branch, commitMessage }`

**POST /api/git/deploy**
- Accepts `{ branch: string }`
- Merges into main, pushes, calls `resetThread()`
- Returns `{ merged, target }`

### Data Flow

1. User types prompt in drawer → POST /api/codex/run
2. Server streams SSE events → Drawer updates plan & file changes in real-time
3. Codex writes to filesystem → Next.js hot reload may pick up changes
4. User clicks "Save to Branch" → POST /api/git/branch → Creates branch
5. User clicks "Deploy to Main" → POST /api/git/deploy → Merges & resets thread

### Critical Behaviors

- **Thread persistence**: Same Codex thread across multiple prompts for context
- **Concurrency safety**: `isRunning` flag prevents concurrent Codex runs and blocks git operations during runs
- **No premature stream abort**: Codex runs complete even if client disconnects
- **Thread reset on deploy**: Fresh context after merging to main

## File Organization

```
app/
  site/page.tsx           # The headphones website (what Codex edits)
  page.tsx                # Redirects to /site
  layout.tsx              # Root layout with CodexDrawer
  api/codex/run/          # SSE streaming endpoint
  api/git/{status,branch,deploy}/  # Git operations

components/
  codex-drawer.tsx        # Main drawer UI
  headphone-card.tsx      # Product card

lib/
  codex.ts                # Codex SDK wrapper
  git.ts                  # simple-git wrapper
  utils.ts                # Tailwind merge helper

data/
  headphones.ts           # Static product data

AGENTS.md                 # Instructions for Codex agent (what to edit)
```

## Development Notes

- **No auth/database**: This is a local dev tool, no session management
- **Codex writes to cwd**: Files are modified in place, not in a sandbox
- **SSE parsing**: Client-side must handle partial chunks and reassemble `data:` lines
- **Git assumptions**: Assumes origin remote exists and main branch is the deploy target
- **Error handling**: Basic try/catch, surface errors in drawer UI

## Common Tasks

**Add a new headphone**: Edit `data/headphones.ts`, add to array
**Modify card design**: Edit `components/headphone-card.tsx`
**Change page layout**: Edit `app/site/page.tsx`
**Test Codex event types**: Check `lib/codex.ts` event classification logic
**Debug SSE stream**: Add console.log in `components/codex-drawer.tsx` SSE parsing loop

## Dependencies

- `@openai/codex-sdk` - Codex API client
- `simple-git` - Git operations
- `clsx` + `tailwind-merge` - Utility class merging
- `lucide-react` - Icons for drawer UI
