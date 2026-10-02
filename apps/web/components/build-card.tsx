import Link from "next/link";
import { Heart } from "lucide-react";

export type Build = {
  id: string;
  title: string;
  grade?: string;
  scale?: string;
  builder: string;
  bootleg?: boolean;
};

export function BuildCard({ build }: { build: Build }) {
  return (
    <article className="overflow-hidden rounded-md border border-border bg-card">
      <div className="relative aspect-square border-b border-border bg-muted">
        <span className="absolute inset-0 grid place-items-center font-mono text-[11px] text-muted-foreground">
          Foto build
        </span>
        {build.bootleg ? (
          <span className="absolute bottom-2 left-2 rounded-full border border-warning/25 bg-warning-surface px-2 py-0.5 text-[11px] font-semibold text-warning">
            Bootleg / KW
          </span>
        ) : null}
        <Link
          href="/masuk"
          aria-label="Masuk untuk menyimpan build"
          className="absolute right-2 top-2 grid size-8 place-items-center rounded-full border border-border bg-white/90 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Heart className="size-4" />
        </Link>
      </div>

      <div className="grid gap-1.5 p-3">
        <h3 className="truncate text-sm font-semibold">{build.title}</h3>
        <div className="flex items-center justify-between gap-2 border-t border-border pt-2">
          {build.grade || build.scale ? (
            <span className="font-mono text-[11px] text-muted-foreground">
              {[build.grade, build.scale].filter(Boolean).join(" · ")}
            </span>
          ) : (
            <span className="font-mono text-[11px] text-muted-foreground">
              Tanpa grade
            </span>
          )}
          <Link
            href={`/build/${build.id}`}
            className="text-[13px] font-semibold text-primary"
          >
            Lihat build
          </Link>
        </div>
      </div>
    </article>
  );
}
