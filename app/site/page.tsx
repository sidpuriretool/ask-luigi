import { headphones } from "@/data/headphones";
import { HeadphoneCard } from "@/components/headphone-card";

export default function SitePage() {
  return (
    <div className="min-h-screen bg-[#f6f3ee] text-slate-900">
      <header className="border-b border-slate-200/70 bg-[#f6f3ee]/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                Curated Audio
              </p>
              <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 mt-3">
                askLuigi
              </h1>
              <p className="text-slate-600 mt-4 text-lg">
                Minimal Scandinavian picks for wireless headphones that feel calm,
                precise, and beautifully made.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 text-sm text-slate-600">
              <div>
                <p className="text-slate-400">Best of 2026</p>
                <p className="text-slate-900 font-semibold">10 curated models</p>
              </div>
              <div>
                <p className="text-slate-400">Price range</p>
                <p className="text-slate-900 font-semibold">$99–$699</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-slate-900">
              Quiet by design
            </h2>
            <p className="text-slate-600 mt-2">
              Airy layouts, soft neutrals, and a focus on comfort-first listening.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
            <span className="rounded-full border border-slate-300/70 px-4 py-2">
              Noise Cancelling
            </span>
            <span className="rounded-full border border-slate-300/70 px-4 py-2">
              All-day Battery
            </span>
            <span className="rounded-full border border-slate-300/70 px-4 py-2">
              Studio Sound
            </span>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {headphones.map((headphone) => (
            <HeadphoneCard key={headphone.id} headphone={headphone} />
          ))}
        </div>
      </main>

      <footer className="border-t border-slate-200/70 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center text-slate-500 text-sm">
          © 2026 askLuigi. Curated headphone recommendations.
        </div>
      </footer>
    </div>
  );
}
