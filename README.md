# askLuigi

A single-page headphones eCommerce site with a built-in Codex drawer for local page editing.

## Features

- Headphones page at `/site` with static top picks
- Floating Codex drawer for prompt-based edits
- SSE streaming for plan text and file changes
- Local preview with Next.js hot reload

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Add env to `.env.local`:
   ```bash
   OPENAI_API_KEY=your-key-here
   NEXTAUTH_SECRET=any-random-string
   NEXTAUTH_URL=http://localhost:3000
   DEMO_EMAIL=demo@example.com
   DEMO_PASSWORD=demo
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000/site](http://localhost:3000/site)

## Programmatic Codex

Codex is used programmatically via the **Codex SDK** in `lib/codex.ts` and exposed by the API routes. See [docs/CODEX.md](docs/CODEX.md) for where and how the SDK is used and the request/stream flow.

## Project Structure

```
app/
  site/page.tsx            # Headphones website
  page.tsx                 # Redirect to /site
  layout.tsx               # Root layout with CodexDrawer
  api/codex/run/           # SSE endpoint for Codex runs
  api/codex/cancel/        # Cancel active run
  api/orders/              # Create order (auth required)
  api/auth/[...nextauth]/  # NextAuth

components/
  codex-drawer.tsx         # Drawer UI (prompt, plan, file changes)
  headphone-card.tsx       # Product card
  session-provider.tsx     # NextAuth SessionProvider

lib/
  codex.ts                 # Codex SDK wrapper + streamed run helper
  db.ts                    # SQLite orders DB
  auth.ts                  # NextAuth config
  utils.ts                 # Tailwind helper

data/
  headphones.ts            # Static product data
  ask-luigi.db             # SQLite DB (created at runtime)
```

## Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npm test
```
