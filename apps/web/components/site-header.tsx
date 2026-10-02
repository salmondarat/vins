import Link from "next/link";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card">
      <div className="mx-auto flex min-h-14 w-full max-w-[1240px] items-center gap-2 px-4 md:gap-3 md:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Vin
        </Link>

        <label className="relative mx-auto hidden w-full max-w-[340px] items-center md:flex">
          <span className="sr-only">Cari kit, builder, atau seri</span>
          <Search
            className="pointer-events-none absolute left-3 size-4 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Cari kit, builder, atau seri"
            className="h-10 pl-9"
          />
        </label>

        <nav className="ml-auto flex items-center gap-1" aria-label="Utama">
          <Link
            href="/kit"
            className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:block"
          >
            Jelajahi kit
          </Link>
          <Link
            href="/builder"
            className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:block"
          >
            Jelajahi builder
          </Link>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Cari"
          >
            <Link href="/cari">
              <Search />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-10">
            <Link href="/masuk">Masuk</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
