# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project Overview

askLuigi is a minimal Next.js site that shows top headphone picks and includes a Codex drawer for local edit prompts.

## Key Commands

```bash
npm run dev
npm run build
npm run lint
```

## Core Files

- `app/site/page.tsx` - main headphones page
- `components/headphone-card.tsx` - individual product card
- `components/codex-drawer.tsx` - prompt UI and SSE stream display
- `app/api/codex/run/route.ts` - Codex run endpoint (SSE)
- `lib/codex.ts` - Codex client + thread management
- `data/headphones.ts` - static product data

## Notes

- No auth, DB, or deployment flow in this version
- Codex edits local files directly with `workspace-write`
- Keep UI changes simple and Tailwind-first
