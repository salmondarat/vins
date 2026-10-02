import { Suspense } from "react";

import { HeroBanner } from "@/components/hero-banner";
import { FilterBar } from "@/components/filter-bar";
import { BuildFeed } from "@/components/build-feed";
import { BuildFeedSkeleton } from "@/components/build-feed-skeleton";
import { getRecentPublishedBuilds } from "@/db/queries/builds";

// The feed is live data; never prerender it at build time.
export const dynamic = "force-dynamic";

async function RecentBuilds() {
  const builds = await getRecentPublishedBuilds();
  return <BuildFeed builds={builds} />;
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 md:px-6">
      <HeroBanner />
      <FilterBar />
      <Suspense fallback={<BuildFeedSkeleton />}>
        <RecentBuilds />
      </Suspense>
    </div>
  );
}
