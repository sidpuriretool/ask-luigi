"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

export function NavBar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-5">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
            askLuigi
          </Link>
          <Link
            href="/site"
            className={`text-sm ${pathname?.startsWith("/site") ? "text-slate-900" : "text-slate-600 hover:text-slate-900"}`}
          >
            Headphones
          </Link>
        </div>

        <div className="flex items-center gap-3 text-sm">
          {status === "loading" && <span className="text-slate-500">Checking auth...</span>}

          {session?.user ? (
            <>
              <span className="hidden text-slate-600 sm:inline">{session.user.email}</span>
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-slate-700 hover:bg-slate-100"
              >
                Sign out
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="rounded-md bg-slate-900 px-3 py-1.5 text-white hover:bg-slate-700"
            >
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
