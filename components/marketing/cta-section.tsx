import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { OrbitSystem } from "@/components/marketing/orbit-system";
import { Reveal } from "@/components/marketing/reveal";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/60">
      {/* Brand accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(51,102,228,0.12),transparent_70%)]"
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-28">
        <Reveal>
          {/* Orbit mark: the hero's solar system scaled to a rotating mark
              above the closing CTA. Same rings, same speeds — one field. */}
          <div
            className="relative mb-10 flex size-36 items-center justify-center"
            aria-hidden="true"
          >
            <OrbitSystem className="size-36" scale={0.36} />
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tighter sm:text-5xl">
            Put your next project in orbit
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
            Plan it, assign it, ship it. Your team&apos;s work, in one place.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <Button asChild size="lg" className="mt-8 h-11 px-5 text-[0.95rem]">
            <Link href="/sign-up">
              Get started
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
