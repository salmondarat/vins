export function Placeholder({ title, note }: { title: string; note: string }) {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-4 py-16 md:px-6">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-2 max-w-[52ch] text-muted-foreground">{note}</p>
      <p className="mt-6 inline-block rounded-md border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
        Segera hadir
      </p>
    </section>
  );
}
