## Ringkasan (Bahasa Indonesia)

Vin Light adalah arah visual Vin: terang, lapang, modern minimal, dengan satu aksen biru. Tujuannya agar foto build menjadi fokus, sementara antarmuka tetap tenang dan presisi. Palet dibatasi pada basis netral ditambah satu biru aksen. Tipografi memakai Inter untuk antarmuka dan JetBrains Mono untuk label teknis seperti grade dan skala. Tata letak mengambil inspirasi bentuk marketplace (banner lebar, bar filter, grid kartu), tetapi seluruh elemen transaksi dari referensi dipetakan ke aksi nyata Vin dan tidak ditampilkan sebagai fitur palsu. Dokumen ini adalah sumber arah visual; `documents/vin-product-overview.md` tetap sumber kebenaran produk dan menang bila terjadi perbedaan.

---

# Vin Design Direction: Vin Light

## 1. Identity

Vin is light, airy, and modern minimal, with a single blue accent. It borrows the shape of a marketplace (wide banner, filter bar, card grid) without borrowing its commerce. Three words: calm, exact, legible.

This direction replaced the earlier Studio Dark direction (dark first, orange, IBM Plex). The change was an explicit owner decision.

## 2. Design Read

Reading this as: a build discovery gallery for Indonesian Gunpla hobbyists, in a modern minimal light UI with a restrained blue accent, dial ENERGY 2 / RHYTHM 2 / MOTION 1.

## 3. Dials

| Dial | Value | Meaning here |
| --- | --- | --- |
| ENERGY | 2 | Calm but present. One blue accent carries the primary action. |
| RHYTHM | 2 | Consistent grid with deliberate breaks: the banner and section rows. |
| MOTION | 1 | Hover and focus states only. No endless motion. |

## 4. Palette

One neutral base plus one blue accent, plus functional states. Neutrals do not count against the palette budget. All text pairings meet WCAG AA; control boundaries meet 3:1.

| Role | Token | Value | Reason |
| --- | --- | --- | --- |
| Page background | `--background` | `#FAFAFB` | Near-white ground so cards read as raised without heavy shadow. |
| Card | `--card` | `#FFFFFF` | White surfaces separated by hairline borders. |
| Muted surface | `--muted` | `#F4F5F7` | Search field and placeholder areas. |
| Border | `--border` | `#E8E9EE` | Hairline dividers. Decorative only. |
| Border strong | `--border-strong` | `#D6D9E0` | Hover and emphasis borders. |
| Input boundary | `--input` | `#8A90A6` | Form controls need a 3:1 boundary (verified 3.17:1). |
| Text | `--foreground` | `#131516` | Headings and body. Contrast 18.3:1. |
| Muted text | `--muted-foreground` | `#6B7280` | Metadata and captions. Contrast 4.8:1. |
| Primary | `--primary` | `#2F5BEA` | Primary action and links. White on it is 5.5:1. |
| Primary hover | `--primary-hover` | `#2449C9` | Hover and active. |
| Secondary | `--secondary` | `#EEF2FB` | Soft blue surfaces. |
| Accent (hover surface) | `--accent` | `#EEF1F6` | shadcn uses `accent` for subtle hover surfaces. The blue brand action is `primary`. |
| Warning | `--warning` | `#A15C00` on `--warning-surface` `#FFF4E0` | Bootleg and caution. Contrast 5.2:1. |
| Destructive | `--destructive` | `#D92D3A` | Errors and destructive actions. Contrast 4.8:1. |
| Success | `--success` | `#0F7B3F` | Confirmation. Contrast 5.4:1. |

Rules:

- Blue is an accent, not the mood. It appears on the primary action, the card action link, focus, and active states. The active filter chip is near-black, not blue.
- Color never carries meaning alone. Warning, danger, and success pair with text or an icon.
- Contrast is verified. Re-run the check after any palette change.

## 5. Typography

| Use | Family | Reason |
| --- | --- | --- |
| UI and body | Inter | Neutral, modern, and legible at small sizes. |
| Labels and metadata | JetBrains Mono | Distinguishes technical values and supports the part-number motif. |

Scale: body never below 15px on mobile; captions at 11.5 to 12px are for labels only; line length capped near 70 characters.

Identity motif: render kit metadata (`MG`, `1/100`, series codes) in `--font-mono`, like part numbers on a spec sheet.

## 6. Shape, Depth, Motion

- Radius: 6px controls, 10px cards, 12px large surfaces, pill for chips only.
- Depth: hairline borders first. Cards have no shadow at rest and gain a faint shadow on hover. Shadows are for layering, not styling.
- Motion: 120ms hover and focus, 200ms reveals, no bounce. Respect `prefers-reduced-motion`.

## 7. Layout Rules

- Mobile first. Base layout is one column; phones are the launch context.
- Header: brand, search, `Jelajahi kit`, `Jelajahi builder`, then auth. When signed in, a compact icon button for `Bagikan build` appears next to the search on desktop, and the auth area shows a profile avatar instead of `Masuk`.
- Banner: a wide, full-width image band (gallery imagery with a builder banner overlaid), followed by a categories and filters bar.
- Grid: 1 column (base), 2 (sm), 3 (lg), 4 (xl).
- One primary action per surface.

## 8. Component Character

- Build card: square image, save (heart) icon, creator row, kit title, then a mono grade and scale line with a `Lihat build` action.
- Filter bar: dropdown chips (Grade, Seri, Gaya, Teknik, Status) plus a sort control.
- Bootleg label: a text chip, never color alone.
- Empty, loading, and error states are first-class, and each names the cause and the next action.

## 9. Honest Mapping (Do Not Copy Fake Commerce)

The reference is an NFT marketplace. Its transaction chrome is not part of Vin's MVP and must never appear as a real feature.

| Reference element | Vin equivalent |
| --- | --- |
| Price in ETH | Grade and scale metadata, no price |
| `Buy now` / `Place a bid` | `Lihat build` and `Simpan` |
| Auction countdown | Removed (no auctions) |
| Owner counts, floor price, volume | Removed |
| Stat bands like `10.3M / 1.2B` | Removed, or a labelled `[REAL DATA]` |
| Wallet connect | `Masuk` |
| Collectors avatar row | Removed (implies data Vin does not have) |

No invented numbers, no gradients, no glass. Placeholders are labelled.

## 10. Implementation (Tailwind v4)

Tokens are defined in `apps/web/app/globals.css` using the shadcn/ui variable contract. Fonts are loaded with `next/font/google` in `apps/web/app/layout.tsx` (Inter and JetBrains Mono). When shadcn/ui is installed, initialize it against these tokens and keep the variable names.

## 11. Open Items

| Item | Status | Notes |
| --- | --- | --- |
| Logo and wordmark | Open | Not part of this document. |
| Dark mode | Deferred | The system is light. If added, both modes must pass contrast. |
| Decorative imagery | Open | The reference uses 3D blobs and gradients. These are intentionally excluded. |
| Component library setup | Installed | shadcn/ui is installed in `apps/web`, mapped to these tokens. |

## Related Documents

- `documents/vin-product-overview.md` (product source of truth)
- `documents/development/04-design-system.md` (structure, components, states, accessibility)
- `documents/development/08-homepage-layout.md` (homepage composition)
- `documents/nft-ui/` (the reference research, kept for provenance)
