import { Skeleton } from "@/components/ui/skeleton";

export function BuildFeedSkeleton() {
  return (
    <section className="py-2" aria-busy="true" aria-label="Memuat build">
      <Skeleton className="mb-3 h-6 w-32" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-md border border-border bg-card"
          >
            <Skeleton className="aspect-square rounded-none border-b border-border" />
            <div className="grid gap-2 p-3">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
