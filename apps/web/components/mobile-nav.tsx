"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, Compass, Plus, Search, User } from "lucide-react";

import { cn } from "@/lib/utils";

const TABS = [
  { href: "/", label: "Jelajahi", icon: Compass },
  { href: "/cari", label: "Cari", icon: Search },
  { href: "/simpan", label: "Simpan", icon: Bookmark },
  { href: "/profil", label: "Profil", icon: User },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Link
        href="/masuk"
        aria-label="Bagikan build"
        className="fixed bottom-[72px] right-4 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-md"
      >
        <Plus className="size-6" />
      </Link>

      <nav
        aria-label="Navigasi bawah"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-border bg-card pb-[env(safe-area-inset-bottom)]"
      >
        {TABS.map((tab) => {
          const active = pathname === tab.href;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-h-14 flex-col items-center justify-center gap-0.5 py-1.5 text-[10.5px] font-medium",
                active ? "text-foreground" : "text-muted-foreground",
              )}
            >
              <Icon className="size-5" />
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
