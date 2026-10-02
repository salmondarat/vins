# ADR-005: Search progression

## Ringkasan (Bahasa Indonesia)

Pencarian MVP dimulai dari pencarian database dan filter terstruktur. Layanan pencarian khusus (Meilisearch, dengan Typesense sebagai alternatif) ditambahkan hanya ketika bukti penggunaan membenarkannya. Ini tidak mengubah framework.

## Status

Accepted.

## Context

MVP search is modest: text search plus a small set of structured filters. Running a dedicated search service adds infrastructure and operational work that is not yet justified.

## Decision

- Start with database search and structured filters.
- Add a dedicated search service only when real usage justifies it. Meilisearch is the recommendation; Typesense is a close alternative.
- Do not treat this as a framework change. Next.js stays. See [ADR-001](ADR-001-nextjs-app-router.md).

## Consequences

- The launch runs fewer services and is simpler to operate.
- Database search may need index and query tuning as data grows.
- Search code should stay behind a boundary so a later swap to Meilisearch is contained.
- Revisit when search latency or result relevance becomes a repeated, measured problem.

## Related

- [Vin Product Overview](../../vin-product-overview.md)
