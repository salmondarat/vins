## Ringkasan (Bahasa Indonesia)

ADB ini mencatat cara Supabase dan Drizzle dipasang di `apps/web`: skema Drizzle sebagai sumber kebenaran dengan migrasi SQL yang bisa ditinjau, koneksi lewat Session pooler, kontrak tiga variabel lingkungan, adapter autentikasi portabel dengan refresh sesi di `proxy.ts` (konvensi Next.js 16), dan kebijakan RLS per tabel. Keputusan ini menuntut pertanyaan terbuka di `02-architecture.md` tentang versi Drizzle, alur migrasi, dan pilihan basis data lokal.

---

# ADR-008: Wire Supabase, Drizzle, and portable auth in apps/web

## Status

Accepted.

## Context

`02-architecture.md` fixed the data stack (Supabase Postgres, Drizzle ORM, adapter pattern) but left open the exact Drizzle versions, the migration workflow, the connection setup, and whether local development uses a hosted or local Supabase stack. Increment 2 (auth and the live homepage feed) needed all four resolved.

Installed versions: `drizzle-orm` 0.45.3, `drizzle-kit` 0.31.11, `postgres` 3.4.9, `@supabase/supabase-js` 2.117.2, `@supabase/ssr` 0.12.7. Next.js 16.3.7 deprecates `middleware.ts` in favor of the `proxy.ts` convention.

The owner chose: full scaffold, secrets stay out of the repository, migrations are applied with the database password kept local.

## Decision

**Schema and migrations**

- `apps/web/db/schema.ts` is the schema source of truth: 14 tables from `03-erd.md`, text columns with `check()` constraints instead of pg enums, uuid primary keys, timestamptz timestamps, and the indexes the ERD specifies.
- Schema migrations are generated SQL in `apps/web/drizzle/` (`drizzle-kit generate`), reviewable in pull requests.
- Custom SQL migration `0001_auth_trigger_rls_seed.sql` carries what Drizzle cannot express: the `handle_new_user()` trigger on `auth.users` (defaults `username` and `display_name` from the email prefix), the RLS policies, and the taxonomy seeds. It is idempotent (`on conflict do nothing`).
- Applying changes: `bunx drizzle-kit migrate`. `drizzle-kit push` is not used, so the custom SQL migration stays in the journal.

**Connection**

- `postgres.js` driver, `DATABASE_URL` pointing at the Supabase Session pooler (port 5432), because the Next.js server holds persistent connections. The transaction pooler (port 6543) is reserved for serverless deployments.
- `drizzle.config.ts` loads `.env.local` through `dotenv`.

**Environment contract**

- Three variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `DATABASE_URL`. `.env.example` documents them; `.env.local` is gitignored.
- `SUPABASE_SERVICE_ROLE_KEY` is reserved for later moderation tooling and is not read anywhere today.

**Auth**

- Feature code depends on the `AuthPort` interface (`lib/auth/types.ts`); Supabase is behind `lib/auth/supabase-adapter.ts`. Server actions (`lib/auth/actions.ts`) call the adapter only.
- Sign-in methods: email and password, plus Google OAuth through `/auth/callback`, which exchanges the code for a session. Unconfirmed email signups surface a confirmation notice instead of an error.
- Session refresh runs in `apps/web/proxy.ts` (the Next.js 16 convention, not the deprecated `middleware.ts`), matching cookies for the `@supabase/ssr` client and skipping static assets.
- Auth failures degrade to the visitor state in shared chrome; page content surfaces configuration errors honestly.

**Data reads**

- Server components read through Drizzle (`db/queries/*`), not the Supabase REST client, per ADR-004. The homepage is `force-dynamic` so the feed is live and never prerendered at build time.

## Consequences

- Migrations are reviewable SQL in the repository; the schema diff between docs and code is checkable.
- Google sign-in shows an honest adapter error until the Google provider is enabled in the Supabase dashboard.
- With `DATABASE_URL` missing, the homepage renders the Indonesian error boundary instead of a broken grid.
- The proxy matcher adds one auth round trip per dynamic request; static assets are excluded.
- Row types exported from `schema.ts` can collide with UI types of the same name; import sites alias.

## Related

- `documents/development/02-architecture.md`
- `documents/development/03-erd.md`
- `documents/development/decisions/ADR-004-drizzle-orm-with-supabase-postgres.md`
