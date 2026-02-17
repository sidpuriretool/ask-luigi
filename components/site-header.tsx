"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useCart } from "@/components/cart-provider";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-full px-3 py-2 text-sm font-medium transition ${
        active ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
      }`}
    >
      {label}
    </Link>
  );
}

export function ViewCartLink({
  className,
  label = "View cart",
}: {
  className?: string;
  label?: string;
}) {
  const { itemCount } = useCart();

  if (!itemCount) {
    return null;
  }

  return (
    <Link
      href="/site/cart"
      className={className}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const { itemCount } = useCart();
  const { data: session, status } = useSession();

  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/site" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            AL
          </span>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">askLuigi</p>
            <p className="text-sm font-semibold text-slate-900">Wirecutter-style picks</p>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink href="/site" label="Shop" />
          <NavLink href="/site/cart" label="Cart" />
          {status === "authenticated" && (
            <NavLink href="/site/orders" label="Orders" />
          )}
          <Link
            href="/site/cart"
            className="ml-2 flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
          >
            <span>Cart</span>
            <span className="inline-flex min-w-6 justify-center rounded-full bg-slate-900 px-1.5 py-0.5 text-xs text-white">
              {itemCount}
            </span>
          </Link>
          {status === "unauthenticated" && (
            <Link
              href="/site/login"
              className="ml-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Login
            </Link>
          )}
          {status === "authenticated" && session?.user && (
            <span className="ml-2 flex items-center gap-2 text-sm text-slate-600">
              <span className="hidden sm:inline">
                {session.user.name ?? session.user.email}
              </span>
              <button
                type="button"
                onClick={() => signOut()}
                className="rounded-full border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                Logout
              </button>
            </span>
          )}
        </nav>
      </div>
    </header>
  );
}
