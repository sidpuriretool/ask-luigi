import { Headphone } from "@/data/headphones";

export function HeadphoneCard({ headphone }: { headphone: Headphone }) {
  return (
    <div className="bg-white/90 rounded-2xl shadow-sm border border-purple-200 p-6 hover:border-purple-500/70 hover:shadow-lg hover:shadow-purple-500/10 transition">
      <div className="relative">
        <div className="absolute top-0 left-0 bg-purple-700 text-yellow-100 text-xs font-bold px-2 py-1 rounded">
          #{headphone.pickNumber}
        </div>
        <div className="w-full h-48 bg-yellow-50 rounded-xl mb-4 flex items-center justify-center border border-purple-100">
          <span className="text-purple-300 text-sm">Image</span>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-purple-950">{headphone.name}</h3>
        <p className="text-sm text-purple-700">{headphone.brand}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-purple-950">
            ${headphone.price}
          </span>
          {headphone.originalPrice && (
            <span className="text-sm text-purple-400 line-through">
              ${headphone.originalPrice}
            </span>
          )}
        </div>
        <p className="text-sm text-purple-800 line-clamp-2">{headphone.description}</p>
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-medium text-purple-950">{headphone.rating}</span>
        </div>
      </div>
    </div>
  );
}
