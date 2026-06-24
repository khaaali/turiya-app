import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Turīya",
  description:
    "Turīya — track your binaural-beat consciousness practice across eight Waves. Log sessions, follow your progress through the Focus levels, explore the neuroscience × yoga synthesis, and keep the key takeaways from every exercise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <StoreProvider>
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-6">
            <Nav />
            <main className="flex-1 py-8">{children}</main>
            <footer className="border-t border-ink-line py-6 text-center text-xs text-slate-500">
              Turīya · A personal practice journal for the eight Waves.
              Your data stays in this browser.
            </footer>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
