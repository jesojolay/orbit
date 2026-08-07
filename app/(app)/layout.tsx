import Link from "next/link";
import { redirect } from "next/navigation";
import { Orbit } from "lucide-react";

import { OrbitSystem } from "@/components/marketing/orbit-system";
import { SignOutButton } from "@/components/app/sign-out-button";
import { createSupabaseServerClient } from "@/lib/supabase/server";

// Shell for everything behind auth: a top bar with the wordmark, the signed-in
// user's email, and sign-out. Proxy.ts already guards these routes; this is a
// second line of defence in case a page is reached some other way.
export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/sign-in");

  return (
    <div className="relative isolate min-h-screen bg-background text-foreground">
      {/* Whisper of the orbital field behind the product surface — faint
          enough not to fight the content, visible enough to carry the brand
          across the app pages. Hidden on mobile. */}
      <OrbitSystem className="-top-32 right-8 -z-10 hidden size-[28rem] opacity-50 lg:block" />
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/app" className="flex items-center gap-2">
            <Orbit className="size-5 text-foreground" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-tight">Orbit</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden max-w-48 truncate text-sm text-muted-foreground sm:block">
              {user.email}
            </span>
            <SignOutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
