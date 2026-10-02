import Link from "next/link";

export function HeroBanner() {
  return (
    <section
      className="relative mt-4 overflow-hidden rounded-lg border border-border md:mt-6"
      aria-labelledby="banner-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 grid auto-rows-fr grid-cols-4 gap-0.5 md:grid-cols-5"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className={i % 3 === 0 ? "bg-secondary" : "bg-muted"} />
        ))}
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-white/50" />

      <div className="relative z-10 flex min-h-[210px] flex-col justify-between gap-6 p-5 md:min-h-[340px] md:p-8">
        <div className="max-w-[42ch]">
          <h1
            id="banner-title"
            className="mb-2 text-[1.6rem] font-semibold leading-[1.1] tracking-tight md:text-[2.5rem]"
          >
            Jelajahi build Gunpla
          </h1>
          <p className="text-[13.5px] text-muted-foreground md:text-[1.05rem]">
            Temukan build dan builder dari Indonesia.
          </p>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white/95 py-1.5 pl-1.5 pr-3 shadow-xs">
          <span
            className="size-8 rounded-full border border-border bg-muted"
            aria-hidden="true"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">@username</span>
            <span className="font-mono text-[11px] text-muted-foreground">
              Builder pilihan
            </span>
          </span>
          <Link
            href="/builder"
            className="ml-1 text-sm font-semibold text-primary"
          >
            Lihat
          </Link>
        </div>
      </div>
    </section>
  );
}
