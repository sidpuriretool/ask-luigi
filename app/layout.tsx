import type { Metadata } from "next";
import "./globals.css";
import { CodexDrawer } from "@/components/codex-drawer";

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
    <html lang="en">
      <body className="antialiased">
        {children}
        <CodexDrawer />
      </body>
    </html>
  );
}
