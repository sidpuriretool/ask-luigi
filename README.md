# askLuigi

A single-page headphones eCommerce site with a built-in Codex agent that lets you edit the live site through natural language prompts.

## Features

- 🎧 **Headphones Site**: Clean, Wirecutter-style product page with top 10 headphone picks
- 🤖 **Codex Integration**: Built-in AI agent drawer for live code editing
- 🔄 **Real-time Preview**: See changes immediately with Next.js hot reload
- 🌿 **Git Integration**: Branch, commit, and deploy changes with one click
- ⚡ **SSE Streaming**: Watch the agent plan and execute changes in real-time

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up your API key**:
   ```bash
   # Copy .env.example to .env.local
   cp .env.example .env.local

   # Edit .env.local and add your OpenAI API key
   OPENAI_API_KEY=your-key-here
   ```

3. **Start the dev server**:
   ```bash
   npm run dev
   ```

4. **Open the site**: Visit [http://localhost:3000](http://localhost:3000)

## How to Use

1. Navigate to `/site` to see the headphones page
2. Click the **🔧 Codex** button in the bottom-right corner
3. Type a prompt like:
   - "Make the hero headline bigger and change accent color to purple"
   - "Add a discount badge to the first product"
   - "Change the grid to 2 columns on desktop"
4. Click **Run** and watch the agent work
5. Refresh the page to see your changes
6. Click **Save to Branch** to create a git branch with your changes
7. Click **Deploy to Main** to merge and deploy

## Project Structure

```
app/
  site/page.tsx              # The headphones website (what Codex edits)
  api/codex/run/             # SSE streaming endpoint
  api/git/{status,branch,deploy}/  # Git operations

components/
  codex-drawer.tsx           # The AI agent UI
  headphone-card.tsx         # Product card

lib/
  codex.ts                   # Codex SDK wrapper
  git.ts                     # Git operations via simple-git

data/
  headphones.ts              # Static product data

AGENTS.md                    # Instructions for the Codex agent
```

## Tech Stack

- **Next.js 15** - App Router + React 19
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Codex SDK** - AI agent integration
- **simple-git** - Git operations

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## How It Works

1. **Codex Agent**: The `lib/codex.ts` module manages a persistent thread that maintains context across multiple prompts
2. **SSE Streaming**: The `/api/codex/run` endpoint streams events (plan text, file changes) as they happen
3. **File Editing**: Codex modifies files directly in `process.cwd()` with `workspace-write` sandbox mode
4. **Git Safety**: Git operations are blocked while Codex is running to prevent conflicts
5. **Thread Persistence**: The same thread is reused for follow-up prompts, then reset after deploy

## Notes

- This is a **local dev tool** - no authentication or database
- Codex operates directly on your filesystem
- Always review changes before deploying to main
- The agent knows what to edit via `AGENTS.md`

## Learn More

- [Codex Documentation](https://openai.com/codex)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
