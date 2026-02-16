import { headphones } from "@/data/headphones";
import { HeadphoneCard } from "@/components/headphone-card";

export default function SitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-amber-50 to-purple-50 text-purple-950">
      <header className="bg-yellow-100/70 border-b border-purple-200 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-700">
            Curated Audio
          </p>
          <h1 className="text-5xl font-semibold text-purple-950 mt-2">askLuigi</h1>
          <p className="text-purple-800 mt-3">
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

      <footer className="bg-purple-50/80 border-t border-purple-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-purple-700 text-sm">
          © 2026 askLuigi. Curated headphone recommendations.
        </div>
      </footer>
    </div>
  );
}
