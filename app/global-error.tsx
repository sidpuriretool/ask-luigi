"use client";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body className="m-0 flex min-h-screen items-center justify-center bg-zinc-50 p-6 text-zinc-900">
        <div className="w-full max-w-lg rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
          <h1 className="text-xl font-semibold">Application error</h1>
          <p className="mt-2 text-sm text-zinc-600">
            A fatal error occurred while rendering this page.
          </p>
          <button
            onClick={reset}
            className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
