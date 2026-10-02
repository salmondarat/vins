import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BuildCard, type Build } from "@/components/build-card";

export function BuildFeed({ builds = [] }: { builds?: Build[] }) {
  const count = builds.length;

  return (
    <section id="feed" className="py-2" aria-labelledby="feed-title">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h2 id="feed-title" className="text-lg font-semibold tracking-tight">
          Build terbaru
        </h2>
        <span className="font-mono text-[11px] text-muted-foreground">
          {count} build
        </span>
      </div>

      {count === 0 ? (
        <div className="rounded-md border border-dashed border-border bg-card px-6 py-14 text-center">
          <p className="text-sm font-medium">Belum ada build.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Jadilah yang pertama membagikan karya.
          </p>
          <Button asChild className="mt-4 h-10">
            <Link href="/masuk">Bagikan build</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {builds.map((build) => (
            <BuildCard key={build.id} build={build} />
          ))}
        </div>
      )}
    </section>
  );
}
