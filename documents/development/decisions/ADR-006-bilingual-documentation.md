# ADR-006: Bilingual documentation

## Ringkasan (Bahasa Indonesia)

Setiap dokumen dibuka dengan ringkasan Bahasa Indonesia, lalu isi lengkap dalam Bahasa Inggris. Bahasa Inggris adalah versi kanonik, dan ringkasan harus dijaga tetap sinkron.

## Status

Accepted.

## Context

Vin launches in Indonesia first, so Indonesian readers need a quick orientation. At the same time, the product overview and development documents are written primarily in English.

## Decision

Every document opens with a `## Ringkasan (Bahasa Indonesia)` summary, followed by the full English content. ADRs follow the same pattern and stay short.

## Consequences

- Indonesian readers get a fast summary; English remains the canonical content.
- Summaries must be updated whenever the English content changes, or they drift.
- This does not promise a full Indonesian translation.

## Related

- [Vin Product Overview](../../vin-product-overview.md)
