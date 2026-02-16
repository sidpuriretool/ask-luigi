import { Headphone } from "@/data/headphones";

export function HeadphoneCard({ headphone }: { headphone: Headphone }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
          #{headphone.pickNumber}
        </div>
        <div className="w-full h-48 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Image</span>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">{headphone.name}</h3>
        <p className="text-sm text-gray-600">{headphone.brand}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-900">${headphone.price}</span>
          {headphone.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${headphone.originalPrice}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-700 line-clamp-2">{headphone.description}</p>
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-medium text-gray-900">{headphone.rating}</span>
        </div>
      </div>
    </div>
  );
}
