import { and, desc, eq, isNotNull } from "drizzle-orm";

import { getDb } from "@/db";
import {
  builds,
  grades,
  kits,
  profiles,
  productStatuses,
} from "@/db/schema";
import type { Build } from "@/components/build-card";

const RECENT_BUILDS_LIMIT = 24;

export async function getRecentPublishedBuilds(
  limit: number = RECENT_BUILDS_LIMIT,
): Promise<Build[]> {
  const database = getDb();

  const rows = await database
    .select({
      id: builds.id,
      title: builds.title,
      builder: profiles.displayName,
      grade: grades.name,
      scale: grades.scale,
      bootleg: productStatuses.isCounterfeit,
    })
    .from(builds)
    .innerJoin(profiles, eq(builds.authorId, profiles.id))
    .innerJoin(productStatuses, eq(builds.productStatusId, productStatuses.id))
    .leftJoin(kits, eq(builds.kitId, kits.id))
    .leftJoin(grades, eq(kits.gradeId, grades.id))
    .where(and(eq(builds.status, "published"), isNotNull(builds.publishedAt)))
    .orderBy(desc(builds.publishedAt))
    .limit(limit);

  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    builder: row.builder,
    grade: row.grade ?? undefined,
    scale: row.scale ?? undefined,
    bootleg: row.bootleg,
  }));
}
