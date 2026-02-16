"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useCart } from "@/components/cart-provider";

export default function CartPage() {
  const { items, subtotal, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="min-h-screen bg-[#f8f8f4] text-slate-900">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Your cart</h1>
        <p className="mt-2 text-sm text-slate-600">Review your picks before checkout.</p>

        {items.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center">
            <p className="text-lg font-medium text-slate-900">Your cart is empty.</p>
            <p className="mt-2 text-sm text-slate-600">Browse the latest picks and add a few models to compare.</p>
            <Link
              href="/site"
              className="mt-5 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <section className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.headphone.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="h-24 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 sm:w-28">
                      <img
                        src={item.headphone.imageUrl}
                        alt={`${item.headphone.brand} ${item.headphone.name}`}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="truncate text-lg font-semibold text-slate-950">
                        {item.headphone.name}
                      </h2>
                      <p className="text-sm text-slate-600">{item.headphone.brand}</p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        ${item.headphone.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="h-8 w-8 rounded-full border border-slate-300 text-slate-700"
                        onClick={() => updateQuantity(item.headphone.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-semibold text-slate-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="h-8 w-8 rounded-full border border-slate-300 text-slate-700"
                        onClick={() => updateQuantity(item.headphone.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.headphone.id)}
                      className="text-sm font-medium text-red-600 transition hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </section>

            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Order summary</p>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                <span>Subtotal</span>
                <span className="text-lg font-semibold text-slate-950">${subtotal}</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">Shipping and taxes calculated at checkout.</p>

              <Link
                href="/site/checkout"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Checkout
              </Link>

              <Link
                href="/site"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
              >
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
