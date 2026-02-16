import Link from "next/link";
import { HeadphoneCard } from "@/components/headphone-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader, ViewCartLink } from "@/components/site-header";
import { headphones } from "@/data/headphones";

export default function SitePage() {
  const topPick = headphones[0];

  return (
    <div className="min-h-screen bg-[#f8f8f4] text-slate-900">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl px-4 py-10">
        <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Best headphones, simplified
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              The Best Headphones for How You Listen
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-700">
              We compare comfort, sound, battery life, and noise blocking so you can pick fast.
              Start with the top picks below, then open any model for the full breakdown.
            </p>

            <div className="mt-6">
              <Link
                href="#recommendations"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-slate-700"
              >
                Browse all picks
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div
            id="featured-pick"
            className="relative scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-100/70 blur-3xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Featured pick
            </p>
            <div className="relative z-10 mt-4 grid gap-5 sm:grid-cols-[150px_1fr]">
              <div className="rounded-2xl border border-slate-100 bg-white p-4">
                <img
                  src={topPick.imageUrl}
                  alt={`${topPick.brand} ${topPick.name}`}
                  className="h-36 w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
                    Best overall
                  </span>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    {topPick.rating}/5
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-slate-950">{topPick.name}</h2>
                <p className="mt-2 text-sm text-slate-600">{topPick.description}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-slate-950">${topPick.price}</span>
                  {topPick.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      ${topPick.originalPrice}
                    </span>
                  )}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {topPick.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/site/product/${topPick.id}`}
                    className="inline-flex rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Shop top pick
                  </Link>
                  <ViewCartLink
                    className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recommendations" className="mt-10 scroll-mt-24">
          <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-semibold text-slate-950">All our headphone picks</h2>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">10 models</p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {headphones.map((headphone, index) => (
              <HeadphoneCard
                key={headphone.id}
                headphone={headphone}
                featured={index === 0}
              />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
