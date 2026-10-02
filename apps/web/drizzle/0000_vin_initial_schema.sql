CREATE TABLE "build_photos" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"build_id" uuid NOT NULL,
	"storage_path" text NOT NULL,
	"alt_text" text,
	"width" integer,
	"height" integer,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "build_style_links" (
	"build_id" uuid NOT NULL,
	"style_id" uuid NOT NULL,
	CONSTRAINT "build_style_links_build_id_style_id_pk" PRIMARY KEY("build_id","style_id")
);
--> statement-breakpoint
CREATE TABLE "build_styles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"description" text,
	"sort_order" integer,
	CONSTRAINT "build_styles_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "build_technique_links" (
	"build_id" uuid NOT NULL,
	"technique_id" uuid NOT NULL,
	CONSTRAINT "build_technique_links_build_id_technique_id_pk" PRIMARY KEY("build_id","technique_id")
);
--> statement-breakpoint
CREATE TABLE "builds" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"author_id" uuid NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"kit_id" uuid,
	"product_status_id" uuid NOT NULL,
	"build_type" text,
	"status" text DEFAULT 'draft' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"published_at" timestamp with time zone,
	CONSTRAINT "builds_status_check" CHECK ("builds"."status" in ('draft', 'published', 'hidden', 'removed'))
);
--> statement-breakpoint
CREATE TABLE "grades" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"scale" text,
	"sort_order" integer,
	CONSTRAINT "grades_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "kits" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"series_id" uuid,
	"grade_id" uuid,
	"product_status_id" uuid NOT NULL,
	"manufacturer" text,
	"release_year" integer,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "kits_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "moderation_actions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"report_id" uuid,
	"moderator_id" uuid NOT NULL,
	"action" text NOT NULL,
	"target_type" text NOT NULL,
	"target_id" uuid NOT NULL,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "moderation_actions_target_type_check" CHECK ("moderation_actions"."target_type" in ('build', 'profile', 'photo'))
);
--> statement-breakpoint
CREATE TABLE "product_statuses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"code" text NOT NULL,
	"label" text NOT NULL,
	"is_counterfeit" boolean DEFAULT false NOT NULL,
	"sort_order" integer,
	CONSTRAINT "product_statuses_code_unique" UNIQUE("code"),
	CONSTRAINT "product_statuses_code_check" CHECK ("product_statuses"."code" in ('official', 'third_party', 'bootleg'))
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"display_name" text NOT NULL,
	"bio" text,
	"avatar_url" text,
	"location" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "profiles_username_unique" UNIQUE("username")
);
--> statement-breakpoint
CREATE TABLE "reports" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"reporter_id" uuid,
	"target_type" text NOT NULL,
	"target_id" uuid NOT NULL,
	"reason" text NOT NULL,
	"details" text,
	"status" text DEFAULT 'open' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"resolved_at" timestamp with time zone,
	"resolved_by" uuid,
	CONSTRAINT "reports_target_type_check" CHECK ("reports"."target_type" in ('build', 'profile', 'photo')),
	CONSTRAINT "reports_status_check" CHECK ("reports"."status" in ('open', 'reviewing', 'resolved', 'dismissed'))
);
--> statement-breakpoint
CREATE TABLE "saved_builds" (
	"profile_id" uuid NOT NULL,
	"build_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "saved_builds_profile_id_build_id_pk" PRIMARY KEY("profile_id","build_id")
);
--> statement-breakpoint
CREATE TABLE "series" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"sort_order" integer,
	CONSTRAINT "series_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "techniques" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"description" text,
	"sort_order" integer,
	CONSTRAINT "techniques_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "build_photos" ADD CONSTRAINT "build_photos_build_id_builds_id_fk" FOREIGN KEY ("build_id") REFERENCES "public"."builds"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "build_style_links" ADD CONSTRAINT "build_style_links_build_id_builds_id_fk" FOREIGN KEY ("build_id") REFERENCES "public"."builds"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "build_style_links" ADD CONSTRAINT "build_style_links_style_id_build_styles_id_fk" FOREIGN KEY ("style_id") REFERENCES "public"."build_styles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "build_technique_links" ADD CONSTRAINT "build_technique_links_build_id_builds_id_fk" FOREIGN KEY ("build_id") REFERENCES "public"."builds"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "build_technique_links" ADD CONSTRAINT "build_technique_links_technique_id_techniques_id_fk" FOREIGN KEY ("technique_id") REFERENCES "public"."techniques"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "builds" ADD CONSTRAINT "builds_author_id_profiles_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "builds" ADD CONSTRAINT "builds_kit_id_kits_id_fk" FOREIGN KEY ("kit_id") REFERENCES "public"."kits"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "builds" ADD CONSTRAINT "builds_product_status_id_product_statuses_id_fk" FOREIGN KEY ("product_status_id") REFERENCES "public"."product_statuses"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kits" ADD CONSTRAINT "kits_series_id_series_id_fk" FOREIGN KEY ("series_id") REFERENCES "public"."series"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kits" ADD CONSTRAINT "kits_grade_id_grades_id_fk" FOREIGN KEY ("grade_id") REFERENCES "public"."grades"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kits" ADD CONSTRAINT "kits_product_status_id_product_statuses_id_fk" FOREIGN KEY ("product_status_id") REFERENCES "public"."product_statuses"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moderation_actions" ADD CONSTRAINT "moderation_actions_report_id_reports_id_fk" FOREIGN KEY ("report_id") REFERENCES "public"."reports"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moderation_actions" ADD CONSTRAINT "moderation_actions_moderator_id_profiles_id_fk" FOREIGN KEY ("moderator_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reports" ADD CONSTRAINT "reports_reporter_id_profiles_id_fk" FOREIGN KEY ("reporter_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reports" ADD CONSTRAINT "reports_resolved_by_profiles_id_fk" FOREIGN KEY ("resolved_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "saved_builds" ADD CONSTRAINT "saved_builds_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "saved_builds" ADD CONSTRAINT "saved_builds_build_id_builds_id_fk" FOREIGN KEY ("build_id") REFERENCES "public"."builds"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "build_photos_build_id_sort_order_idx" ON "build_photos" USING btree ("build_id","sort_order");--> statement-breakpoint
CREATE INDEX "build_style_links_style_id_idx" ON "build_style_links" USING btree ("style_id");--> statement-breakpoint
CREATE INDEX "build_technique_links_technique_id_idx" ON "build_technique_links" USING btree ("technique_id");--> statement-breakpoint
CREATE INDEX "builds_author_id_idx" ON "builds" USING btree ("author_id");--> statement-breakpoint
CREATE INDEX "builds_status_published_at_idx" ON "builds" USING btree ("status","published_at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "builds_kit_id_idx" ON "builds" USING btree ("kit_id");--> statement-breakpoint
CREATE INDEX "builds_product_status_id_idx" ON "builds" USING btree ("product_status_id");--> statement-breakpoint
CREATE INDEX "builds_created_at_idx" ON "builds" USING btree ("created_at" DESC NULLS LAST);--> statement-breakpoint
CREATE INDEX "kits_name_idx" ON "kits" USING btree ("name");--> statement-breakpoint
CREATE INDEX "kits_series_id_idx" ON "kits" USING btree ("series_id");--> statement-breakpoint
CREATE INDEX "kits_grade_id_idx" ON "kits" USING btree ("grade_id");--> statement-breakpoint
CREATE INDEX "kits_product_status_id_idx" ON "kits" USING btree ("product_status_id");--> statement-breakpoint
CREATE INDEX "reports_status_created_at_idx" ON "reports" USING btree ("status","created_at");--> statement-breakpoint
CREATE INDEX "reports_target_idx" ON "reports" USING btree ("target_type","target_id");--> statement-breakpoint
CREATE INDEX "saved_builds_build_id_idx" ON "saved_builds" USING btree ("build_id");