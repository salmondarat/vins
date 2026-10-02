# ADR-004: Drizzle ORM as the schema source of truth

## Ringkasan (Bahasa Indonesia)

Skema database didefinisikan dan diubah di Drizzle, yang menjadi satu-satunya sumber kebenaran skema. Ini menjaga portabilitas dan memberi query bertipe. Skema tetap Postgres standar.

## Status

Accepted.

## Context

Vin needs a portable schema and type-safe access. The database will live on Supabase for the MVP, but the schema must not depend on a single provider.

## Decision

Define and evolve the database schema in Drizzle ORM. Generate migrations from the Drizzle schema, and treat that schema as the single source of truth for the database.

## Consequences

- One schema definition drives migrations and type-safe queries.
- Portability holds because the schema stays standard Postgres.
- Drizzle tooling must be added before schema work begins. This is a development-level decision and is not configured yet.
- Avoid database features that Drizzle cannot represent or that would lock the schema to Supabase.

## Related

- [Vin Product Overview](../../vin-product-overview.md)
