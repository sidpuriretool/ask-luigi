import type { Metadata } from "next";
import "./globals.css";
import { CodexDrawer } from "@/components/codex-drawer";
import { CartProvider } from "@/components/cart-provider";
import { AskLuigiSessionProvider } from "@/components/session-provider";

export const metadata: Metadata = {
  title: "askLuigi",
  description: "Headphone picks with a built-in Codex editing drawer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <AskLuigiSessionProvider>
          <CartProvider>
            {children}
            <CodexDrawer />
          </CartProvider>
        </AskLuigiSessionProvider>
      </body>
    </html>
  );
}
