import { headphones } from "@/data/headphones";
import { HeadphoneCard } from "@/components/headphone-card";

export default function SitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900">askLuigi</h1>
          <p className="text-gray-600 mt-2">The best wireless headphones of 2026</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {headphones.map((headphone) => (
            <HeadphoneCard key={headphone.id} headphone={headphone} />
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-600 text-sm">
          © 2026 askLuigi. Curated headphone recommendations.
        </div>
      </footer>
    </div>
  );
}
