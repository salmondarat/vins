# ADR-003: Supabase for the MVP with portability guardrails

## Ringkasan (Bahasa Indonesia)

Backend MVP memakai Supabase terkelola (Postgres, Auth, Storage) demi kecepatan peluncuran. Agar tidak terkunci, skema Drizzle menjadi sumber kebenaran, panggilan Auth dan Storage dibungkus adapter, dan skema tetap Postgres standar.

## Status

Accepted.

## Context

The MVP must launch quickly. Supabase bundles managed Postgres, Auth, and Storage, which avoids standing up and operating those services separately. At the same time, Vin should keep a credible path off the platform.

## Decision

- Use managed Supabase for the MVP.
- Keep Drizzle ORM as the schema source of truth. See [ADR-004](ADR-004-drizzle-schema-source-of-truth.md).
- Isolate Supabase Auth and Storage calls behind small adapter modules.
- Keep the Postgres schema standard. Avoid deep vendor coupling.

## Consequences

- Data migrates off Supabase with a normal Postgres dump and restore.
- Leaving the platform requires bounded rework for auth, storage, and row-level security policies.
- Self-hosting Supabase is a middle path that keeps much of the application code unchanged.
- Standard Postgres constraints limit use of features that work only on Supabase.

## Related

- [Vin Product Overview](../../vin-product-overview.md)
