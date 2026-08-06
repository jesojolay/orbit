import Link from "next/link";
import { Check } from "lucide-react";

import { OrbitSystem } from "@/components/marketing/orbit-system";
import { Reveal } from "@/components/marketing/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Lite",
    price: "$0",
    cadence: "/ forever",
    blurb: "For small teams getting started on their first board.",
    features: [
      "Up to 3 boards",
      "Unlimited tasks",
      "Up to 5 members",
      "Standard board view",
    ],
    cta: "Get started",
  },
  {
    name: "Pro",
    price: "$12",
    cadence: "/ user / month",
    blurb: "For teams that ship on more than one board at a time.",
    features: [
      "Unlimited boards",
      "Unlimited members",
      "Priorities and due dates",
      "Advanced views and filters",
      "Invites and roles",
      "Priority support",
    ],
    cta: "Get started",
    featured: true,
  },
];

function PriceCard({ tier }: { tier: Tier }) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col p-6",
        tier.featured && "ring-brand/25"
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-medium tracking-tight">{tier.name}</h3>
        {tier.featured && (
          <span className="inline-flex items-center rounded-full bg-brand/15 px-2.5 py-0.5 text-[11px] font-medium text-brand ring-1 ring-brand/25 ring-inset">
            Most popular
          </span>
        )}
      </div>

      <div className="mt-5 flex items-baseline gap-1.5">
        <span className="text-4xl font-semibold tracking-tight">
          {tier.price}
        </span>
        <span className="text-sm text-muted-foreground">{tier.cadence}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{tier.blurb}</p>

      <ul className="mt-6 flex flex-col gap-2.5">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm text-foreground/80"
          >
            <Check
              className="mt-0.5 size-4 shrink-0 text-foreground/60"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={tier.featured ? "default" : "outline"}
        size="lg"
        className="mt-8 h-10 w-full"
      >
        <Link href="/sign-up">{tier.cta}</Link>
      </Button>
    </Card>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative isolate overflow-hidden border-b border-border/60"
    >
      {/* Counterpart to the hero/features orbit: a quieter system in the
          lower-left so the field never competes with the price cards. Hidden
          on mobile. */}
      <OrbitSystem className="-bottom-32 -left-24 -z-10 hidden size-[26rem] opacity-60 lg:block" />
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tighter text-balance sm:text-4xl">
              Simple pricing for every stage
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
              Start free on Lite, upgrade to Pro when your team outgrows it.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-2">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80} className="h-full">
              <PriceCard tier={tier} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted-foreground">
            Plans and limits may change before general launch. Prices in USD.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
