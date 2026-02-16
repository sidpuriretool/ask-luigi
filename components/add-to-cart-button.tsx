"use client";

import { useState } from "react";
import { useCart } from "@/components/cart-provider";

export function AddToCartButton({ headphoneId }: { headphoneId: number }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        addToCart(headphoneId);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1200);
      }}
      className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
    >
      {added ? "Added" : "Add to cart"}
    </button>
  );
}
