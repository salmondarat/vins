import { HeroBanner } from "@/components/hero-banner";
import { FilterBar } from "@/components/filter-bar";
import { BuildFeed } from "@/components/build-feed";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 md:px-6">
      <HeroBanner />
      <FilterBar />
      <BuildFeed />
    </div>
  );
}
