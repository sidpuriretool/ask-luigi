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
              Top 10 headphones
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Shop tested headphone picks, curated for sound, comfort, and value.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-700">
              Start with our editor-ranked list, open any product for the full details, then add a
              few to your cart and try the demo checkout.
            </p>

            <div className="mt-6">
              <Link
                href="#recommendations"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-slate-700"
              >
                Browse all recommendations
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div id="featured-pick" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Featured pick</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">{topPick.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{topPick.description}</p>
            <p className="mt-3 text-2xl font-semibold text-slate-950">${topPick.price}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
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
        </section>

        <section id="recommendations" className="mt-10 scroll-mt-24">
          <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-semibold text-slate-950">Shop all recommendations</h2>
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
