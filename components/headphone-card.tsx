import { Headphone } from "@/data/headphones";

export function HeadphoneCard({ headphone }: { headphone: Headphone }) {
  return (
    <div className="bg-white/80 rounded-2xl shadow-sm border border-amber-100 p-6 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-200/60 transition">
      <div className="relative">
        <div className="absolute top-0 left-0 bg-amber-400 text-amber-950 text-xs font-bold px-2 py-1 rounded">
          #{headphone.pickNumber}
        </div>
        <div className="w-full h-48 bg-amber-50 rounded-xl mb-4 flex items-center justify-center border border-amber-100">
          <span className="text-amber-700/60 text-sm">Image</span>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">{headphone.name}</h3>
        <p className="text-sm text-slate-500">{headphone.brand}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-slate-900">
            ${headphone.price}
          </span>
          {headphone.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ${headphone.originalPrice}
            </span>
          )}
        </div>
        <p className="text-sm text-slate-600 line-clamp-2">{headphone.description}</p>
        <div className="flex items-center gap-1">
          <span className="text-amber-500">★</span>
          <span className="text-sm font-medium text-slate-800">{headphone.rating}</span>
        </div>
      </div>
    </div>
  );
}
