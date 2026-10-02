"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-4 py-16 md:px-6">
      <div className="mx-auto grid w-full max-w-md gap-4 rounded-lg border border-border bg-card p-6">
        <h1 className="text-xl font-semibold tracking-tight">
          Terjadi kesalahan
        </h1>
        <p className="text-sm text-muted-foreground">{error.message}</p>
        <Button onClick={reset} className="h-10 w-fit">
          Coba lagi
        </Button>
      </div>
    </section>
  );
}
