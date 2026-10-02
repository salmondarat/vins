# ADR-001: Next.js App Router for apps/web

## Ringkasan (Bahasa Indonesia)

`apps/web` memakai Next.js dengan App Router. Keputusan ini dipertahankan karena MVP butuh halaman build dan profil publik, state pencarian dan filter, metadata untuk berbagi dan indeks, serta dukungan paket workspace. Belum ada kendala nyata yang muncul, jadi tidak ada alasan untuk menggantinya saat ini. Framework ditinjau ulang hanya jika muncul batasan konkret.

## Status

Accepted.

## Context

The MVP needs public build and profile pages, search and filter state, page metadata for sharing and indexing, and support for local workspace packages in the monorepo. `apps/web` already runs Next.js with the App Router, React 19, and TypeScript. The product overview records this as current implementation, not a permanent product requirement.

## Decision

Keep Next.js with the App Router as the framework for `apps/web`.

## Consequences

- App Router routing, metadata, sitemaps, and workspace package support cover the MVP needs.
- No concrete mismatch with the MVP has surfaced, so there is no current reason to replace it.
- Revisit only if deployment constraints, runtime needs, operational complexity, or measured product demands show a material advantage elsewhere.
- A need for more specialized search may call for a search service without a framework change. See [ADR-005](ADR-005-search-progression.md).

## Related

- [Vin Product Overview](../../vin-product-overview.md)
