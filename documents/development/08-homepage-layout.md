## Ringkasan (Bahasa Indonesia)

Dokumen ini mencatat tata letak beranda Vin: komposisi, banner lebar, bar kategori dan filter, anatomi kartu, salinan antarmuka Bahasa Indonesia, status, aturan responsif, dan aksesibilitas. Beranda adalah permukaan **Experience** (galeri), jadi karya pengguna memimpin dan antarmuka menyingkir. Arah visual mengikuti `DESIGN.md` (Vin Light) dan struktur mengikuti `04-design-system.md`. `documents/vin-product-overview.md` tetap sumber kebenaran produk dan menang bila terjadi perbedaan.

Bentuk tata letak mengambil inspirasi marketplace, tetapi seluruh elemen transaksi dari referensi dipetakan ke aksi nyata Vin. Salinan Bahasa Indonesia adalah draf dan perlu diperiksa penutur asli. Konten di pratinjau bersifat placeholder.

---

# Homepage Layout

## 1. Purpose and Scope

This document defines the layout for the Vin homepage (`/`): a gallery-first surface where visitors discover builds and builders. It covers composition, the header, the banner, the categories and filters bar, the build card, copy, states, responsiveness, and accessibility. It does not cover the build detail page or builder profile page.

## 2. Mode and Direction

- Mode: **Experience**. The work leads and the interface recedes.
- Direction: **Vin Light** (`DESIGN.md`), light, modern minimal, one blue accent.
- Dials: ENERGY 2 / RHYTHM 2 / MOTION 1.
- Refused default: fabricated commerce. The layout borrows the marketplace shape, not its prices, bids, or auctions.

## 3. Composition

Order, top to bottom:

1. **Header** (sticky, 56px, hairline border): brand, search, `Jelajahi kit`, `Jelajahi builder`, auth.
2. **Wide banner**: a full-width image band with an overlaid builder banner.
3. **Categories and filters bar**: dropdown chips plus a sort control.
4. **Feed grid**: build cards.
5. **Builder and series row**: collection cards.
6. **Load more**: a `Muat lebih banyak` button.
7. **Footer** (minimal): brand, tagline, and only links that exist.

## 4. Header

| Slot | Signed out | Signed in |
| --- | --- | --- |
| Left | `Vin` wordmark | `Vin` wordmark |
| Center | Search (rounded rectangle) | Search |
| Near search | none | A compact icon button for `Bagikan build` (desktop only) |
| Nav | `Jelajahi kit`, `Jelajahi builder` | `Jelajahi kit`, `Jelajahi builder` |
| Right | `Masuk` button | Profile avatar |

Rules: the share action is an icon, not a text button, to keep the header slim. On mobile, the share icon is hidden and the search moves to its own row. When logged in, the avatar replaces `Masuk`.

## 5. Wide Banner Anatomy

- A full-width, rounded image band filled with gallery imagery.
- A soft solid overlay for text legibility (no gradient).
- A title and supporting line, left aligned.
- A **builder banner** overlaid bottom-left: avatar, handle, role, and a `Lihat builder` link.
- When there is no approved imagery, use a neutral placeholder and the invitation to contribute.

## 6. Categories and Filters Bar

A white rounded bar containing dropdown chips and a sort control.

- Chips: `Grade`, `Seri`, `Gaya`, `Teknik`, `Status`. Each opens a menu of checkbox options with real taxonomy values.
- Sort: `Urut` with options such as `Terbaru`, `Paling disimpan`, `Grade A sampai Z`.
- The chip row scrolls horizontally on mobile.
- Menus close on outside click and on `Escape`.

## 7. Build Card Anatomy

- Square image with a save (heart) icon overlay.
- Bootleg label as a text chip when selected.
- Creator row: avatar and handle.
- Kit title.
- Meta row: mono grade and scale on the left, a `Lihat build` action on the right.

The card maps the reference's NFT card onto Vin: image and creator stay, price and `Buy now` become grade, scale, and `Lihat build`.

## 8. Copy (Bahasa Indonesia Drafts)

| Element | Copy | English gloss |
| --- | --- | --- |
| Banner title | Jelajahi build Gunpla | Explore Gunpla builds |
| Banner sub | Temukan build dan builder dari Indonesia. | Find builds and builders from Indonesia |
| Nav | Jelajahi kit, Jelajahi builder | Explore kits, Explore builders |
| Share | Bagikan build | Share a build |
| Sign in | Masuk | Sign in |
| Builder banner | Lihat builder | View builder |
| Filter chips | Grade, Seri, Gaya, Teknik, Status | Grade, Series, Style, Technique, Status |
| Sort | Urut: Terbaru | Sort: Newest |
| Feed title | Build terbaru | Latest builds |
| Card action | Lihat build | View build |
| Load more | Muat lebih banyak | Load more |
| Series section | Builder dan seri | Builders and series |
| Empty | Belum ada build. Jadilah yang pertama membagikan. | No builds yet. Be the first to share |
| No results | Tidak ada build yang cocok. | No builds match |
| Error | Gagal memuat build. Coba lagi. | Failed to load builds. Try again |

## 9. States

| State | What shows |
| --- | --- |
| Loading | Skeleton banner and card grid |
| Empty (no builds yet) | The invitation with a `Bagikan build` action |
| No results (filters) | `Tidak ada build yang cocok.` with a clear-filters action |
| Error | `Gagal memuat build.` with retry |

## 10. Responsive and Mobile Patterns

Two presentations share one design system. The desktop preview reflows down (grid columns 1, 2, 3, 4). The mobile preview uses mobile-native patterns instead of only reflowing.

### Desktop preview
Search in the header, dropdown filter chips, wide banner, card grid. Below 900px the search moves to its own row and the share icon hides.

### Mobile-native patterns
- **Slim top bar:** brand, search icon, share icon (signed in), avatar.
- **Full-bleed banner:** edge to edge, shorter, with the title and the builder banner.
- **Filter bottom sheet:** a `Filter` button opens a sheet with grouped checkboxes (Grade, Seri, Gaya, Teknik, Status) and a `Terapkan` action. It closes on `Escape`, backdrop tap, or the close button.
- **Feed:** two-up compact card grid.
- **Series:** horizontal snap carousel.
- **Share:** a floating action button above the tab bar, plus the top-bar share icon.
- **Bottom tab bar:** `Jelajahi`, `Cari`, `Simpan`, `Profil`.

Both presentations use the same tokens, the same card anatomy, the same bootleg label, and the same honest-content rules. The differences are navigation and control patterns, not identity.

Preview files: `preview/homepage.html` (desktop) and `preview/homepage-mobile.html` (mobile).

## 11. Accessibility

- One `h1` (the banner title). The feed is a labelled region.
- The share icon button has an accessible name (`Bagikan build`).
- Dropdown chips use `aria-expanded`, close on outside click and `Escape`, and their options are real checkboxes.
- The card hover state is only visual; the save action is a real focusable button.
- The bootleg label pairs text with color.
- Contrast follows `DESIGN.md` and `04-design-system.md` (AA text, 3:1 control boundaries).

## 12. Honest Mapping (No Fake Commerce)

| Reference element | Vin equivalent |
| --- | --- |
| Price in ETH | Grade and scale |
| `Buy now` / `Place a bid` | `Lihat build` and `Simpan` |
| Auction countdown | Removed |
| Owner counts, floor price, volume | Removed |
| Stat bands | Removed, or `[REAL DATA]` |
| Wallet connect | `Masuk` |
| Collectors avatar row | Removed |

## 13. Open Items

| Item | Status | Notes |
| --- | --- | --- |
| Indonesian copy review | Open | Needs a native-speaker pass. |
| Share action on mobile | Resolved | The mobile preview uses a top-bar share icon and a floating action button. |
| Banner content source | Open | Which build or builder is featured, and how it is chosen. |
| Dark mode | Deferred | The system is light. |
| Search placement | Open | Whether search has its own route. |

## 14. Direction Contract

- **THESIS:** the homepage proves Vin through a wide build banner, clear categories, and a card grid, borrowing the marketplace shape without its fake commerce.
- **OWN-WORLD:** Vin Light. Near-white ground, white cards, hairline borders, one blue accent, Inter with JetBrains Mono for kit metadata.
- **STORY:** a visitor sees the banner, filters by grade or style, scans cards, opens a build, and reaches its builder.
- **FIRST VIEWPORT:** the header (brand, search, auth), the wide banner with the builder banner, and the categories and filters bar. The primary action is `Bagikan build` (icon, signed in).
- **FORM:** one vertical composition. Banner, filter bar, grid, series row. Flat surfaces, no gradients.
- **FINISH:** the direction is recorded here, in `DESIGN.md`, and in the preview. The preview is a layout reference, not the shipped page.

## 15. Implementation Status

The homepage shell is implemented in `apps/web`: `SiteHeader`, `HeroBanner`, `FilterBar` (with the shadcn bottom sheet), `BuildFeed` (honest empty state, no fake data), `MobileNav` (bottom tabs and FAB), and placeholder routes for `/kit`, `/builder`, `/cari`, `/simpan`, `/profil`, and `/masuk`. Live data arrives in Increment 2 (Supabase and auth).

## Related Documents

- `documents/vin-product-overview.md` (product source of truth)
- `documents/development/DESIGN.md` (visual direction)
- `documents/development/04-design-system.md` (system)
- `documents/development/preview/homepage.html` (desktop layout preview)
- `documents/development/preview/homepage-mobile.html` (mobile-native preview)
- `documents/nft-ui/` (reference research, kept for provenance)
