import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

// Base glow palette (at scale 1). Brand-indigo glows for the core and planets
// (#3366e4, matching --color-brand).
const CORE_GLOW_COLOR = "rgba(51, 102, 228, 0.45)";
const INDIGO_GLOW_COLOR = "rgba(51, 102, 228, 0.4)";
const LIGHT_GLOW_COLOR = "rgba(219, 227, 255, 0.3)";

// Scale a dimension, clamped so small systems keep visible dots and glows
// instead of collapsing to nothing.
const scaled = (n: number, scale: number, min = 0) => Math.max(min, n * scale);

function Planet({
  className,
  size,
  glow,
}: {
  className?: string;
  size: number;
  glow: string;
}) {
  return (
    <span
      className={cn(
        "absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full",
        className
      )}
      style={{ width: size, height: size, boxShadow: glow }}
    />
  );
}

function Ring({
  size,
  duration,
  reverse,
  dashed,
  planet,
}: {
  size: number;
  duration: number;
  reverse?: boolean;
  dashed?: boolean;
  planet: ReactNode;
}) {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/50",
        dashed && "border-dashed"
      )}
      style={{ width: size, height: size }}
    >
      {/* Rotating arm: carries the planet around the ring. Rotation is the only
          animated property (GPU-friendly). Reduced-motion users get a static
          diagram via the .animate-orbit guard in globals.css. */}
      <div
        className={cn("absolute inset-0", reverse ? "animate-orbit-reverse" : "animate-orbit")}
        style={{ "--orbit-duration": `${duration}s` } as CSSProperties}
      >
        {planet}
      </div>
    </div>
  );
}

/**
 * Decorative, on-brand "solar system": planets orbit a glowing core on
 * concentric rings, echoing the Orbit wordmark. Purely visual (aria-hidden,
 * pointer-events-none) and collapses to a static diagram under
 * prefers-reduced-motion. Position the wrapper wherever you want the system's
 * centre; it fills the given box.
 *
 * `scale` shrinks the whole system (rings, planets, core, glows) so one
 * component serves the full-size hero field, ambient section backdrops, and
 * small marks alike. Ring speeds stay constant across scales, so every
 * instance turns at the same angular rate and the whole page reads as one
 * seamless orbital field.
 */
export function OrbitSystem({
  className,
  scale = 1,
}: {
  className?: string;
  scale?: number;
}) {
  const px = (n: number, min = 0) => scaled(n, scale, min);
  // Glow blur/spread scale with the system so small marks keep tight halos.
  const glow = (blur: number, spread: number, color: string) =>
    `0 0 ${px(blur, 2)}px ${px(spread, 1)}px ${color}`;

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute", className)}>
      <Ring
        size={px(380)}
        duration={28}
        dashed
        planet={
          <Planet
            className="bg-brand"
            size={px(10, 3)}
            glow={glow(12, 2, INDIGO_GLOW_COLOR)}
          />
        }
      />
      <Ring
        size={px(288)}
        duration={19}
        reverse
        planet={
          <Planet
            className="bg-foreground/60"
            size={px(8, 3)}
            glow={glow(10, 2, LIGHT_GLOW_COLOR)}
          />
        }
      />
      <Ring
        size={px(200)}
        duration={13}
        dashed
        planet={
          <Planet
            className="bg-brand/70"
            size={px(8, 3)}
            glow={glow(12, 2, INDIGO_GLOW_COLOR)}
          />
        }
      />
      {/* Core */}
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand"
        style={{
          width: px(12, 4),
          height: px(12, 4),
          boxShadow: glow(18, 4, CORE_GLOW_COLOR),
        }}
      />
    </div>
  );
}
