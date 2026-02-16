import { headphones } from "@/data/headphones";
import { HeadphoneCard } from "@/components/headphone-card";

export default function SitePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.45em] text-zinc-500">
            <span className="h-[1px] w-10 bg-red-600" />
            Curated Audio
          </div>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-950">
                askLuigi
              </h1>
              <p className="text-lg text-zinc-600 mt-3 max-w-xl">
                Quiet, comfortable, and confident. A Bose-inspired selection of
                wireless headphones that put calm at the center.
              </p>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_25px_60px_-45px_rgba(0,0,0,0.55)]">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Focus Areas
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-zinc-700">
                <div className="rounded-2xl border border-black/10 p-3">
                  Noise cancellation
                </div>
                <div className="rounded-2xl border border-black/10 p-3">
                  All-day comfort
                </div>
                <div className="rounded-2xl border border-black/10 p-3">
                  Warm, balanced sound
                </div>
                <div className="rounded-2xl border border-black/10 p-3">
                  Clear call quality
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              2026 Picks
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-950 mt-2">
              Quiet confidence, ranked.
            </h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium text-zinc-800 shadow-sm">
            Compare all models
          </button>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {headphones.map((headphone) => (
            <HeadphoneCard key={headphone.id} headphone={headphone} />
          ))}
        </div>
      </main>

      <footer className="border-t border-black/10 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-sm text-zinc-500">
          © 2026 askLuigi. Curated headphone recommendations.
        </div>
      </footer>
    </div>
  );
}
