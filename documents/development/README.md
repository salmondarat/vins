# Vin Development Documents

## Ringkasan (Bahasa Indonesia)

Folder ini berisi dokumen pengembangan Vin. Semua dokumen mengacu pada `../vin-product-overview.md` sebagai sumber kebenaran produk. Jika dokumen pengembangan dan overview berbeda, overview yang berlaku. Tabel di bawah menjelaskan tujuan setiap dokumen dan tautannya.

## Purpose

This folder holds Vin's development foundation documents. They translate the confirmed product direction in [`../vin-product-overview.md`](../vin-product-overview.md) into implementation context.

Guiding rule: `vin-product-overview.md` wins on conflict. When a development document adds a decision that is not in the overview, it is marked clearly as a development-level decision or an open question.

## Documents

| Document | Purpose |
| --- | --- |
| [Product Overview](../vin-product-overview.md) | Confirmed product direction, MVP scope, and open questions. Source of truth. |
| [PRD](01-prd.md) | Product requirements for the MVP searchable Gunpla showcase. |
| [Architecture](02-architecture.md) | System structure, data flow, and technology choices. |
| [ERD](03-erd.md) | Entity-relationship diagram and data dictionary for MVP entities. |
| [Design Direction](DESIGN.md) | Vin Light visual direction: identity, palette, typography, motif, and dials. |
| [Design System](04-design-system.md) | UI structure, components, states, accessibility, and implementation notes. |
| [UX Flows](05-ux-flows.md) | Primary user flows, including empty, loading, and error states. |
| [Moderation Policy](06-moderation-policy.md) | Rules and operations for user-generated content, including bootleg labels. |
| [Roadmap](07-roadmap.md) | Milestone-based plan and launch checklist. No invented dates. |
| [Homepage Layout](08-homepage-layout.md) | Composition, build card, Bahasa Indonesia copy, states, and the direction contract. |

## Preview

| File | Purpose |
| --- | --- |
| [Homepage preview (desktop)](preview/homepage.html) | Static HTML and CSS preview of the desktop homepage layout. Placeholder content only. |
| [Homepage preview (mobile)](preview/homepage-mobile.html) | Mobile-native preview: bottom tabs, filter bottom sheet, FAB, full-bleed banner. |

## Architecture Decision Records

ADRs record why a decision was made and what it commits Vin to.

| ADR | Decision |
| --- | --- |
| [ADR-001](decisions/ADR-001-nextjs-app-router.md) | Keep Next.js App Router for `apps/web`. |
| [ADR-002](decisions/ADR-002-bun-turborepo-monorepo.md) | Use a Bun-managed Turborepo monorepo. |
| [ADR-003](decisions/ADR-003-supabase-mvp-portability.md) | Use managed Supabase for the MVP with portability guardrails. |
| [ADR-004](decisions/ADR-004-drizzle-schema-source-of-truth.md) | Use Drizzle ORM as the database schema source of truth. |
| [ADR-005](decisions/ADR-005-search-progression.md) | Start with database search, add a search service only when justified. |
| [ADR-006](decisions/ADR-006-bilingual-documentation.md) | Write bilingual documentation with an Indonesian summary and English content. |
| [ADR-007](decisions/ADR-007-vin-light-direction.md) | Replace Studio Dark with the Vin Light direction. |

## Conventions

- Each document opens with a Bahasa Indonesia summary, then full English content.
- No em dashes. Use a comma, colon, period, or parentheses.
- No fabricated data. Use labeled placeholders such as `[REAL DATA]` or "Coming soon".
- Future proposals are labeled as proposals, not available features.
