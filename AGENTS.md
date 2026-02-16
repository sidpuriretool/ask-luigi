# askLuigi

A storefront-style headphones eCommerce site built with Next.js 15, TypeScript, and Tailwind CSS.

## What to edit
- `app/site/page.tsx` — storefront homepage layout
- `app/site/product/[id]/page.tsx` — product detail page
- `app/site/cart/page.tsx` — cart page layout and UI copy
- `app/site/checkout/page.tsx` — checkout page layout and UI copy
- `components/headphone-card.tsx` — individual product card component
- `components/site-header.tsx` — storefront header/nav
- `components/site-footer.tsx` — storefront footer
- `data/headphones.ts` — product data (names, prices, descriptions, features)
- `app/globals.css` — global Tailwind styles if needed

## Do not edit
- `lib/codex.ts` — infrastructure, not the website
- `app/api/` — API routes, not the website
- `components/codex-drawer.tsx` — the agent UI, not the website
- `components/cart-provider.tsx` — cart state logic
- `components/add-to-cart-button.tsx` — add-to-cart action logic
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
