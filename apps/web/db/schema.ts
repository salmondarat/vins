import { sql } from "drizzle-orm";
import {
  boolean,
  check,
  index,
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

/**
 * Schema source of truth for Vin, per documents/development/03-erd.md.
 * Postgres standard features only, so the schema stays portable.
 */

const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
};

export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey(),
  username: text("username").notNull().unique(),
  displayName: text("display_name").notNull(),
  bio: text("bio"),
  avatarUrl: text("avatar_url"),
  location: text("location"),
  ...timestamps,
});

export const productStatuses = pgTable(
  "product_statuses",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    code: text("code").notNull().unique(),
    label: text("label").notNull(),
    isCounterfeit: boolean("is_counterfeit").notNull().default(false),
    sortOrder: integer("sort_order"),
  },
  (table) => [
    check(
      "product_statuses_code_check",
      sql`${table.code} in ('official', 'third_party', 'bootleg')`,
    ),
  ],
);

export const series = pgTable("series", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  sortOrder: integer("sort_order"),
});

export const grades = pgTable("grades", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  scale: text("scale"),
  sortOrder: integer("sort_order"),
});

export const buildStyles = pgTable("build_styles", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  sortOrder: integer("sort_order"),
});

export const techniques = pgTable("techniques", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  sortOrder: integer("sort_order"),
});

export const kits = pgTable(
  "kits",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    slug: text("slug").notNull().unique(),
    seriesId: uuid("series_id").references(() => series.id),
    gradeId: uuid("grade_id").references(() => grades.id),
    productStatusId: uuid("product_status_id")
      .notNull()
      .references(() => productStatuses.id),
    manufacturer: text("manufacturer"),
    releaseYear: integer("release_year"),
    ...timestamps,
  },
  (table) => [
    index("kits_name_idx").on(table.name),
    index("kits_series_id_idx").on(table.seriesId),
    index("kits_grade_id_idx").on(table.gradeId),
    index("kits_product_status_id_idx").on(table.productStatusId),
  ],
);

export const builds = pgTable(
  "builds",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    authorId: uuid("author_id")
      .notNull()
      .references(() => profiles.id),
    title: text("title").notNull(),
    description: text("description"),
    kitId: uuid("kit_id").references(() => kits.id),
    productStatusId: uuid("product_status_id")
      .notNull()
      .references(() => productStatuses.id),
    buildType: text("build_type"),
    status: text("status").notNull().default("draft"),
    ...timestamps,
    publishedAt: timestamp("published_at", { withTimezone: true }),
  },
  (table) => [
    check(
      "builds_status_check",
      sql`${table.status} in ('draft', 'published', 'hidden', 'removed')`,
    ),
    index("builds_author_id_idx").on(table.authorId),
    index("builds_status_published_at_idx").on(
      table.status,
      table.publishedAt.desc(),
    ),
    index("builds_kit_id_idx").on(table.kitId),
    index("builds_product_status_id_idx").on(table.productStatusId),
    index("builds_created_at_idx").on(table.createdAt.desc()),
  ],
);

export const buildPhotos = pgTable(
  "build_photos",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    buildId: uuid("build_id")
      .notNull()
      .references(() => builds.id, { onDelete: "cascade" }),
    storagePath: text("storage_path").notNull(),
    altText: text("alt_text"),
    width: integer("width"),
    height: integer("height"),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    index("build_photos_build_id_sort_order_idx").on(
      table.buildId,
      table.sortOrder,
    ),
  ],
);

export const buildStyleLinks = pgTable(
  "build_style_links",
  {
    buildId: uuid("build_id")
      .notNull()
      .references(() => builds.id, { onDelete: "cascade" }),
    styleId: uuid("style_id")
      .notNull()
      .references(() => buildStyles.id),
  },
  (table) => [
    primaryKey({ columns: [table.buildId, table.styleId] }),
    index("build_style_links_style_id_idx").on(table.styleId),
  ],
);

export const buildTechniqueLinks = pgTable(
  "build_technique_links",
  {
    buildId: uuid("build_id")
      .notNull()
      .references(() => builds.id, { onDelete: "cascade" }),
    techniqueId: uuid("technique_id")
      .notNull()
      .references(() => techniques.id),
  },
  (table) => [
    primaryKey({ columns: [table.buildId, table.techniqueId] }),
    index("build_technique_links_technique_id_idx").on(table.techniqueId),
  ],
);

export const reports = pgTable(
  "reports",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    reporterId: uuid("reporter_id").references(() => profiles.id),
    targetType: text("target_type").notNull(),
    targetId: uuid("target_id").notNull(),
    reason: text("reason").notNull(),
    details: text("details"),
    status: text("status").notNull().default("open"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    resolvedAt: timestamp("resolved_at", { withTimezone: true }),
    resolvedBy: uuid("resolved_by").references(() => profiles.id),
  },
  (table) => [
    check(
      "reports_target_type_check",
      sql`${table.targetType} in ('build', 'profile', 'photo')`,
    ),
    check(
      "reports_status_check",
      sql`${table.status} in ('open', 'reviewing', 'resolved', 'dismissed')`,
    ),
    index("reports_status_created_at_idx").on(table.status, table.createdAt),
    index("reports_target_idx").on(table.targetType, table.targetId),
  ],
);

export const moderationActions = pgTable(
  "moderation_actions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    reportId: uuid("report_id").references(() => reports.id),
    moderatorId: uuid("moderator_id")
      .notNull()
      .references(() => profiles.id),
    action: text("action").notNull(),
    targetType: text("target_type").notNull(),
    targetId: uuid("target_id").notNull(),
    notes: text("notes"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    check(
      "moderation_actions_target_type_check",
      sql`${table.targetType} in ('build', 'profile', 'photo')`,
    ),
  ],
);

export const savedBuilds = pgTable(
  "saved_builds",
  {
    profileId: uuid("profile_id")
      .notNull()
      .references(() => profiles.id),
    buildId: uuid("build_id")
      .notNull()
      .references(() => builds.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    primaryKey({ columns: [table.profileId, table.buildId] }),
    index("saved_builds_build_id_idx").on(table.buildId),
  ],
);

export type Profile = typeof profiles.$inferSelect;
export type Build = typeof builds.$inferSelect;
export type BuildPhoto = typeof buildPhotos.$inferSelect;
export type Kit = typeof kits.$inferSelect;
export type Series = typeof series.$inferSelect;
export type Grade = typeof grades.$inferSelect;
export type ProductStatus = typeof productStatuses.$inferSelect;
export type BuildStyle = typeof buildStyles.$inferSelect;
export type Technique = typeof techniques.$inferSelect;
export type Report = typeof reports.$inferSelect;
export type ModerationAction = typeof moderationActions.$inferSelect;
export type SavedBuild = typeof savedBuilds.$inferSelect;
