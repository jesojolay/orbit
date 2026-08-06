import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowUp,
  Check,
  ChevronsUp,
  Kanban,
  Keyboard,
  Mail,
  Minus,
  UserPlus,
} from "lucide-react";

import { OrbitSystem } from "@/components/marketing/orbit-system";
import { Reveal } from "@/components/marketing/reveal";
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function Cell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <Card className={cn("p-6", className)}>{children}</Card>;
}

function MiniColumn({
  title,
  count,
  active,
  done,
}: {
  title: string;
  count: number;
  active?: boolean;
  done?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-lg border border-border/70 bg-background/70 p-2.5",
        active && "border-brand/50 bg-brand/[0.05]"
      )}
    >
      <div className="flex items-center gap-1.5 px-0.5">
        <span
          className={cn(
            "size-1.5 rounded-full bg-muted-foreground/40",
            active && "bg-brand"
          )}
        />
        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {title}
        </span>
        <span className="ml-auto font-mono text-[10px] text-muted-foreground/50">
          {count}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="h-6 rounded-md bg-muted/60" />
        <span className="h-6 rounded-md bg-muted/40" />
        {done && (
          <span className="flex h-6 items-center gap-1.5 rounded-md bg-muted/50 px-2">
            <Check className="size-3 text-muted-foreground/60" aria-hidden="true" />
            <span className="h-1.5 flex-1 rounded-full bg-muted-foreground/20" />
          </span>
        )}
      </div>
    </div>
  );
}

function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex h-6 items-center rounded-md border border-border/70 bg-muted/50 px-1.5 font-mono text-[11px] text-foreground/80 shadow-[inset_0_-1px_0_oklch(0_0_0/0.2)]">
      {children}
    </kbd>
  );
}

const priorities: { label: string; glyph: typeof ArrowUp }[] = [
  { label: "Urgent", glyph: ChevronsUp },
  { label: "High", glyph: ArrowUp },
  { label: "Medium", glyph: Minus },
  { label: "Low", glyph: ArrowDown },
];

const members = ["JM", "AK", "RD", "SK"];

export function Features() {
  return (
    <section
      id="features"
      className="relative isolate overflow-hidden border-b border-border/60"
    >
      {/* Orbital field: the hero's solar system continues down the page,
          floating in the open space above the feature grid, its lower arcs
          dipping behind the cards. Hidden on mobile. */}
      <OrbitSystem className="-top-28 -right-20 -z-10 hidden size-[28rem] opacity-70 lg:block" />
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tighter text-balance sm:text-4xl">
              Everything your team needs, nothing it doesn&apos;t
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
              Orbit gives you a fast kanban board, clear priorities, and sharp
              assignment. Nothing to configure, nothing to maintain.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {/* Large board tile */}
          <Reveal className="h-full md:col-span-2" delay={0}>
            <Cell className="h-full bg-linear-to-b from-brand/[0.07] to-transparent">
              <div className="flex items-center gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-border/60 bg-secondary/60">
                  <Kanban className="size-4" aria-hidden="true" />
                </span>
                <h3 className="font-medium tracking-tight">
                  Boards that move with you
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Set up To Do, In Progress, and Done in seconds, then reorder
                work with a drag.
              </p>
              <div className="grid grid-cols-3 gap-2">
                <MiniColumn title="To Do" count={3} />
                <MiniColumn title="In Progress" count={2} active />
                <MiniColumn title="Done" count={3} done />
              </div>
            </Cell>
          </Reveal>

          {/* Keyboard-first tile */}
          <Reveal className="h-full" delay={60}>
            <Cell className="h-full">
              <div className="flex items-center gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-border/60 bg-secondary/60">
                  <Keyboard className="size-4" aria-hidden="true" />
                </span>
                <h3 className="font-medium tracking-tight">Fast by default</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Every action is a shortcut. Drive the whole app without leaving
                the keyboard.
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="flex items-center gap-1.5">
                  <Kbd>N</Kbd>
                  <span className="text-[11px] text-muted-foreground">
                    new task
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Kbd>G</Kbd>
                  <Kbd>B</Kbd>
                  <span className="text-[11px] text-muted-foreground">
                    go to board
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Kbd>J</Kbd>
                  <Kbd>K</Kbd>
                  <span className="text-[11px] text-muted-foreground">
                    select next
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Kbd>?</Kbd>
                  <span className="text-[11px] text-muted-foreground">
                    shortcuts
                  </span>
                </span>
              </div>
            </Cell>
          </Reveal>

          {/* Assign tile */}
          <Reveal className="h-full" delay={0}>
            <Cell className="h-full">
              <div className="flex items-center gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-border/60 bg-secondary/60">
                  <UserPlus className="size-4" aria-hidden="true" />
                </span>
                <h3 className="font-medium tracking-tight">
                  Assign, then trust the board
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Give every task an owner and a priority. Everyone sees who does
                what, no standup required.
              </p>
              <div className="flex items-center gap-3">
                <AvatarGroup>
                  {members.map((initials) => (
                    <Avatar key={initials} size="sm">
                      <AvatarFallback className="bg-secondary text-[10px] text-muted-foreground">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  <AvatarGroupCount>+3</AvatarGroupCount>
                </AvatarGroup>
              </div>
            </Cell>
          </Reveal>

          {/* Priorities tile */}
          <Reveal className="h-full" delay={60}>
            <Cell className="h-full">
              <div className="flex items-center gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-border/60 bg-secondary/60">
                  <ArrowUp className="size-4" aria-hidden="true" />
                </span>
                <h3 className="font-medium tracking-tight">
                  Priorities that stay visible
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Four levels, one glance. The urgent work never hides at the
                bottom of a list.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {priorities.map(({ label, glyph: Glyph }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/70 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                  >
                    <Glyph
                      className="size-3 text-muted-foreground/80"
                      aria-hidden="true"
                    />
                    {label}
                  </span>
                ))}
              </div>
            </Cell>
          </Reveal>

          {/* Invite tile */}
          <Reveal className="h-full" delay={120}>
            <Cell className="h-full">
              <div className="flex items-center gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-border/60 bg-secondary/60">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <h3 className="font-medium tracking-tight">
                  Invite in one step
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Share a link or type an email. New members land straight on the
                board.
              </p>
              <div className="flex items-center gap-2 rounded-lg border border-border/70 bg-background px-2.5 py-2">
                <span className="truncate font-mono text-[11px] text-muted-foreground">
                  collaborator@orbit.dev
                </span>
                <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-foreground/80">
                  <Mail className="size-3" aria-hidden="true" />
                  Invite
                </span>
              </div>
            </Cell>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
