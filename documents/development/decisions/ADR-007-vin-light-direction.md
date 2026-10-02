## Ringkasan (Bahasa Indonesia)

ADB ini mencatat keputusan pemilik untuk mengganti arah visual dari Studio Dark (gelap, oranye, IBM Plex) menjadi Vin Light (terang, biru, Inter). Keputusan ini mengikuti riset UI marketplace di `documents/nft-ui/`, dengan syarat seluruh elemen transaksi dari referensi dipetakan ke aksi nyata Vin dan tidak ditampilkan sebagai fitur palsu.

---

# ADR-007: Replace Studio Dark with the Vin Light direction

## Status

Accepted.

## Context

The first direction was Studio Dark: dark first, warm orange accent, IBM Plex Sans and Mono, minimal and systematic. It was recorded in `DESIGN.md` and wired into `apps/web` tokens and fonts.

The owner then asked for the product to look like an NFT marketplace, referencing a case study in `documents/nft-ui/`. That reference is a light interface with a blue and indigo palette, Inter, rounded cards, and a marketplace structure (wide banner, filter bar, card grid). It is also full of commerce that Vin does not have: prices in ETH, bids, auction countdowns, owner counts, floor price, volume, and fabricated stat bands.

## Decision

Replace Studio Dark with **Vin Light**:

- Light theme, near-white ground, white cards, hairline borders.
- One blue accent (`#2F5BEA`), used for the primary action, links, and focus. The active filter chip is near-black, not blue.
- Inter for UI and JetBrains Mono for technical labels.
- Modern minimal and flat: minimal shadows, small radii, no gradients or glass.
- Adopt the marketplace structure (wide banner with a builder banner, categories and filters bar, card grid) while mapping every commerce element to a real Vin action: `Lihat build`, `Simpan`, grade and scale instead of price, and no auctions or counts.

Tokens are updated in `apps/web/app/globals.css` and fonts in `apps/web/app/layout.tsx`. The direction is recorded in `DESIGN.md`, with the honest mapping in `08-homepage-layout.md`.

## Consequences

- The earlier Studio Dark tokens, fonts, and documentation are superseded.
- The reference's fake commerce and its decorative gradients and 3D blobs are explicitly excluded, so the design keeps reporting honest placeholders.
- If a dark theme is wanted later, both modes must pass contrast; the token contract already supports it.

## Related

- `documents/development/DESIGN.md`
- `documents/development/08-homepage-layout.md`
- `documents/nft-ui/` (reference research)
