"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { FormEvent, useEffect, useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useCart } from "@/components/cart-provider";

export default function CheckoutPage() {
  const router = useRouter();
  const { status } = useSession();
  const { items, subtotal, clearCart } = useCart();
  const [ordered, setOrdered] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated" && items.length > 0 && !ordered) {
      router.replace("/site/login?returnUrl=/site/checkout");
    }
  }, [status, items.length, ordered, router]);

  const handlePlaceOrder = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!items.length) return;
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          address,
          items: items.map((i) => ({
            headphoneId: i.headphone.id,
            quantity: i.quantity,
          })),
          subtotal,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 401) {
          router.replace("/site/login?returnUrl=/site/checkout");
          return;
        }
        setError(data.error ?? `Request failed (${res.status})`);
        return;
      }
      clearCart();
      setOrdered(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to place order");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8f4] text-slate-900">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Checkout</h1>

        {ordered ? (
          <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Order placed
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-emerald-900">Thanks for your order.</h2>
            <p className="mt-2 text-sm text-emerald-800">
              Your confirmation email is on its way.
            </p>
            <Link
              href="/site"
              className="mt-5 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Back to shop
            </Link>
          </section>
        ) : items.length === 0 ? (
          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center">
            <p className="text-lg font-medium text-slate-900">Your cart is empty.</p>
            <Link
              href="/site"
              className="mt-5 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start shopping
            </Link>
          </section>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <form
              onSubmit={handlePlaceOrder}
              className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6"
            >
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">
                  {error}
                </div>
              )}
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Shipping details
              </p>

              <label className="block text-sm text-slate-700">
                Full name
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm"
                  placeholder="Alex Johnson"
                />
              </label>

              <label className="block text-sm text-slate-700">
                Email
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm"
                  placeholder="alex@example.com"
                />
              </label>

              <label className="block text-sm text-slate-700">
                Shipping address
                <textarea
                  required
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  className="mt-1 h-24 w-full resize-none rounded-xl border border-slate-300 px-3 py-2.5 text-sm"
                  placeholder="123 Main St, Apt 4B, Brooklyn, NY"
                />
              </label>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Mock payment
                </p>
                <p className="mt-2 text-sm text-slate-700">Card ending in 4242 • Test mode only.</p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? "Placing order…" : "Place order"}
              </button>
            </form>

            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Order summary
              </p>

              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {items.map((item) => (
                  <li key={item.headphone.id} className="flex items-center justify-between gap-2">
                    <span className="truncate">
                      {item.headphone.name} × {item.quantity}
                    </span>
                    <span className="font-medium text-slate-900">
                      ${item.headphone.price * item.quantity}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 border-t border-slate-200 pt-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="text-lg font-semibold text-slate-950">${subtotal}</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
