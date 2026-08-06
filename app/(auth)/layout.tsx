import Link from "next/link";
import { Orbit } from "lucide-react";

import { OrbitSystem } from "@/components/marketing/orbit-system";

// Shared shell for the public auth pages (sign-in / sign-up): a centered card
// on the full-page hairline grid, with the wordmark above it.
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate min-h-[100dvh] bg-background text-foreground">
      {/* Full-page hairline grid, softened toward the edges so it reads as
          texture rather than a flat pattern. -z-10 keeps it behind the card. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_95%)]"
      />
      {/* Orbital field: the marketing hero's solar system, quieted down, so
          the public auth surfaces share the same living space. -z-10 keeps it
          behind the card and wordmark. */}
      <OrbitSystem className="-top-28 right-8 -z-10 hidden size-[34rem] opacity-70 lg:block" />
      <main className="flex min-h-[100dvh] items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-sm">
          <Link href="/" className="mb-6 flex items-center justify-center gap-2">
            <Orbit className="size-5 text-foreground" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-tight">Orbit</span>
          </Link>
          <div className="rounded-xl border border-border/60 bg-card p-6 shadow-[0_24px_70px_-24px_oklch(0_0_0/0.7)] sm:p-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
