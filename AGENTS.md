# askLuigi

A single-page headphones eCommerce site built with Next.js 15, TypeScript, and Tailwind CSS.

## What to edit
- `app/site/page.tsx` — the main page layout and structure
- `components/headphone-card.tsx` — individual product card component
- `data/headphones.ts` — product data (names, prices, descriptions)
- `app/globals.css` — global Tailwind styles if needed

## Do not edit
- `lib/codex.ts`, `lib/git.ts` — infrastructure, not the website
- `app/api/` — API routes, not the website
- `components/codex-drawer.tsx` — the agent UI, not the website
- `app/layout.tsx` — root layout, not the website
- `app/page.tsx` — redirect page, not the website

## Tech
- Next.js 15 App Router
- Tailwind CSS for all styling (utility classes, no separate CSS files)
- TypeScript strict mode
- Static data in `data/headphones.ts`

## Style guidelines
- Keep all changes within Tailwind utility classes
- Maintain responsive layout (mobile-friendly grid)
- Prices in USD format ($XXX)
