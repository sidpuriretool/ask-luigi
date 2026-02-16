import { headphones } from "@/data/headphones";
import { HeadphoneCard } from "@/components/headphone-card";

export default function SitePage() {
  return (
    <div className="min-h-screen bg-amber-50 text-slate-900 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.24),_transparent_60%)]">
      <header className="bg-amber-50/80 border-b border-amber-100/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-700/70">
            Curated Audio
          </p>
          <h1 className="text-5xl font-semibold text-slate-900 mt-2">askLuigi</h1>
          <p className="text-slate-600 mt-3">
            The best wireless headphones of 2026
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {headphones.map((headphone) => (
            <HeadphoneCard key={headphone.id} headphone={headphone} />
          ))}
        </div>
      </main>

      <footer className="bg-amber-50/80 border-t border-amber-100/80 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-slate-500 text-sm">
          © 2026 askLuigi. Curated headphone recommendations.
        </div>
      </footer>
    </div>
  );
}
