## Ringkasan (Bahasa Indonesia)

Dokumen ini menetapkan sistem desain Vin: struktur, token, inventaris komponen, aturan status antarmuka, aturan aksesibilitas, dan aturan mobile-first untuk showcase Gunpla yang gallery-first dan image-led.

Arah visual sudah ditetapkan: **Vin Light, terang dan modern minimal** (lihat `DESIGN.md`). Palet dibatasi pada basis netral ditambah satu biru aksen, dan tipografi memakai Inter untuk antarmuka serta JetBrains Mono untuk label teknis. Bentuk tata letak mengambil inspirasi marketplace, tetapi seluruh elemen transaksi dari referensi dipetakan ke aksi nyata Vin. Dokumen ini adalah keputusan tingkat pengembangan yang mengikuti `documents/vin-product-overview.md`; jika terjadi perbedaan, product overview yang berlaku.

---

# Design System

## 1. Status and Scope

This document defines the structural design system for Vin: the token roles, component inventory, required UI states, accessibility rules, and mobile-first behavior.

**Visual direction is resolved: Vin Light, light and modern minimal.** The palette, typography, and identity motif are defined in `DESIGN.md`. The token values below reflect that direction. `DESIGN.md` is the source for visual direction; this document is the source for structure, components, and behavior.

Source of truth: `documents/vin-product-overview.md`. The product overview wins on any conflict.

Terminology follows the overview: build post, builder profile, kit, grade, scale, series, style, technique, product status, bootleg / knock-off, taxonomy.

## 2. Design Principles

Each principle has one reason. If a future decision conflicts with a principle, record why.

1. **Gallery first, chrome last.** Reason: the product's value is discovered through real build posts, so images lead and interface chrome recedes.
2. **Structure over skin.** Reason: a stable structure keeps the system reviewable even as visual detail evolves.
3. **Mobile first.** Reason: the launch market is Indonesia and browsing happens on phones, so the small layout is the base case, not a downgrade.
4. **One primary action per surface.** Reason: first-time visitors should not choose between competing calls to action.
5. **Honest labels.** Reason: product status and the bootleg / knock-off warning are a confirmed product rule, so they are designed in, not hidden in metadata.
6. **No fake commerce.** Reason: the visual reference is a marketplace, but Vin's MVP has no prices, bids, or auctions, so none of that chrome may ship.
7. **Accessibility is not optional.** Reason: keyboard, screen reader, and contrast affordances protect the whole audience and are cheapest to build in from the start.

## 3. Tokens

Tokens are named by role, not by appearance. Names follow the shadcn/ui variable contract so component styling themes automatically. Values match `apps/web/app/globals.css`; `DESIGN.md` explains the direction.

### 3.1 Color roles

One neutral base plus one blue accent, plus functional feedback colors. Contrast pairings are a requirement (Section 7), not a suggestion.

```css
:root {
  color-scheme: light;

  /* Surfaces */
  --background: #fafafb;      /* page background */
  --card: #ffffff;            /* cards and panels */
  --popover: #ffffff;         /* menus, sheets */
  --muted: #f4f5f7;           /* search field, placeholder areas */
  --border: #e8e9ee;          /* decorative dividers only */
  --border-strong: #d6d9e0;   /* hover and emphasis borders */
  --input: #8a90a6;           /* form control boundaries, meets 3:1 */

  /* Text */
  --foreground: #131516;        /* headings and body */
  --muted-foreground: #6b7280;  /* metadata, captions */

  /* Action */
  --primary: #2f5bea;            /* primary action, links */
  --primary-hover: #2449c9;      /* primary hover and active */
  --primary-foreground: #ffffff; /* text on accent fills */
  --secondary: #eef2fb;          /* soft blue surfaces */
  --secondary-foreground: #16204a;
  --accent: #eef1f6;             /* subtle hover surface (shadcn contract) */
  --accent-foreground: #131516;
  --ring: #2f5bea;               /* visible focus outline */

  /* Feedback */
  --destructive: #d92d3a;  /* errors, destructive actions */
  --warning: #a15c00;      /* bootleg and caution text */
  --warning-surface: #fff4e0;
  --success: #0f7b3f;      /* confirmation */
}
```

| Role | Purpose | Reason |
| --- | --- | --- |
| `background` / `card` | Base and raised surfaces | A near-white ground with white cards reads as layered without heavy shadow. |
| `muted` | Search field, placeholders | A soft neutral separates inputs from the page. |
| `border` | Decorative dividers | Subtle separation, not a component boundary. |
| `input` | Form control boundaries | Controls need a 3:1 boundary to be identifiable. |
| `foreground` / `muted-foreground` | Content hierarchy | Two text levels are enough for a gallery. |
| `primary` | Primary buttons, links, focus | One accent color prevents competing actions. |
| `destructive` / `warning` / `success` | Feedback and safety | Pair with text or an icon, never color alone. |

### 3.2 Typography scale

Families are Inter (UI and body) and JetBrains Mono (labels and metadata). Use `rem` so the scale respects user font settings.

```css
:root {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  --font-size-display: 2.5rem;   /* 40px, page titles */
  --font-size-h1: 1.75rem;       /* 28px */
  --font-size-h2: 1.25rem;       /* 20px */
  --font-size-h3: 1.125rem;      /* 18px */
  --font-size-body: 0.9375rem;   /* 15px */
  --font-size-sm: 0.8125rem;     /* 13px, metadata */
  --font-size-caption: 0.72rem;  /* 11.5px, labels */

  --line-height-tight: 1.1;      /* headings */
  --line-height-base: 1.5;       /* body */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
}
```

Rules: body text never below 15px on mobile; captions may be 11.5 to 12px but not used for primary content; line length capped near 70 characters for descriptions; headings use weight 600, not heavier.

Identity motif: render kit metadata (grade, scale, series codes) in `--font-mono`, like part numbers on a spec sheet.

### 3.3 Spacing scale

A 4px base. Reason: a single scale prevents ad hoc gaps and keeps rhythm consistent.

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.5rem;   /* 24px */
  --space-6: 2rem;     /* 32px */
  --space-7: 3rem;     /* 48px */
}
```

### 3.4 Radius

```css
:root {
  --radius-sm: 6px;    /* controls, inputs */
  --radius-md: 10px;   /* cards, panels */
  --radius-lg: 12px;   /* banner, large surfaces */
  --radius-pill: 999px;/* chips only */
}
```

Reason: pill is reserved for chips so rounding signals "tag", not decoration.

### 3.5 Elevation

```css
:root {
  --elevation-none: none;
  --elevation-xs: 0 1px 2px rgb(19 21 22 / 0.04);
  --elevation-sm: 0 2px 8px rgb(19 21 22 / 0.06);
}
```

Rules: surfaces sit flat with a hairline border; a faint shadow appears only on hover, on menus, and on modals. Reason: shadows are for layering, not styling.

### 3.6 Motion

```css
:root {
  --duration-fast: 120ms;   /* hover, focus */
  --duration-base: 200ms;   /* reveal, expand */
  --duration-slow: 320ms;   /* sheet and modal entrance */
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
}
```

Rules: motion is limited to opacity, transform, and color. No bounce by default. Respect `prefers-reduced-motion: reduce`.

## 4. Component Inventory

| Component | Purpose | Key states | Reason |
| --- | --- | --- | --- |
| **Header** | Brand, search, explore, auth | signed-out, signed-in | Search and navigation must always be reachable. |
| **Wide banner** | A gallery image band with an overlaid builder banner | loaded, empty | Gives the homepage a focal point without a marketing hero. |
| **Categories and filters bar** | Dropdown chips (Grade, Seri, Gaya, Teknik, Status) plus sort | closed, open, active-filter | Structured filters are a confirmed capability, so they need a persistent shell. |
| **Build card** | Represent one build post in a grid | default, hover, focus, saved, bootleg-labeled | The card is the main discovery unit, so it carries image, kit, and status at a glance. |
| **Search input** | Text search by kit, series, or builder | idle, typing, loading, results, no-results, error | Text search is the primary entry point. |
| **Tag chips** | Category and filter values | unselected, selected, disabled, removable, overflow | Chips make selected values visible and reversible. |
| **Save button** | Save a build | idle, saving, saved, error | Save requires an account, so it prompts sign-in when anonymous. |
| **Builder banner** | Show a featured builder | loaded, empty | Links a build to its creator. |
| **Empty state** | Explain a surface with no content | contextual | An empty surface without guidance looks broken. |
| **Loading skeleton** | Reserve layout while data loads | card, grid, banner | Skeletons prevent layout shift on image-heavy pages. |
| **Error state** | Explain a failure and offer retry | inline, full-page, offline | Users need to know whether to retry or wait. |
| **Bootleg warning** | Show the counterfeit warning and label | authoring, published, detail view | A confirmed product and moderation rule, so it is a first-class component. |
| **Sign-in forms** | Email/password plus Google sign-in | idle, validating, submitting, error, success | Account is required to publish or save. |

## 5. Required UI States per Data Surface

Every surface that reads or writes data must design four states: empty, loading, error, success.

| Data surface | Empty | Loading | Error | Success |
| --- | --- | --- | --- | --- |
| Banner | Fallback gradient-free placeholder with the invitation to contribute | Banner skeleton | Inline error with retry | Gallery image with builder banner |
| Filters bar | No filters applied | Disabled while results load | Filters preserved, retry available | Active filters shown on the chip |
| Feed grid | "No builds yet" with a `Bagikan build` action | Grid of card skeletons | Inline error with retry | Real build cards |
| Search results | "No builds match" with a clear-filters action | Card skeletons | Inline error with retry | Ranked build cards |
| Build detail | Not applicable (page exists or 404s) | Detail skeletons | Full-page error with retry | Photos, description, details, builder link |
| Builder profile | "No published builds yet" | Header and grid skeletons | Inline error with retry | Profile header plus build grid |
| Photo upload | Dropzone prompt | Per-file progress | Per-file error with retry or remove | Thumbnails with reorder and remove |
| Save / favorite | Not saved (prompt to sign in) | Button busy state | Inline error, reversible | Saved state |
| Sign-in / sign-up | Not applicable | Submit button busy state | Field and form errors | Redirect with confirmation |

**Missing-content guard:** If there are not enough real, approved builds for a useful gallery at launch, use the temporary introduction page described in the product overview. Do not fill the gallery with invented or unapproved work.

## 6. Responsive and Mobile Rules

Mobile is the base layout.

| Breakpoint | Min width | Grid columns | Notes |
| --- | --- | --- | --- |
| base | 0 | 1 | Header search on its own row; filter chips scroll horizontally. |
| sm | 640px | 2 | Cards may show more metadata. |
| lg | 1024px | 3 | Banner gains height; filter bar is a single row. |
| xl | 1280px | 4 | Content max width caps so text lines stay readable. |

Rules: tap targets at least 44 by 44 px for primary controls; images use fixed aspect-ratio containers; forms use 16px minimum input text on mobile; respect safe areas.

## 7. Accessibility Rules

| Area | Rule | Reason |
| --- | --- | --- |
| Contrast | Body text and essential UI meet WCAG AA: 4.5:1 normal, 3:1 large and meaningful boundaries. Verified: text 4.8:1 or higher, input boundary 3.17:1. | Confirmed acceptance criterion. |
| Color independence | Never use color alone for state. Pair with text or an icon. | The warning and error states must survive color blindness. |
| Keyboard | All interactive elements reachable and operable by keyboard. Dropdown menus close on Escape. | Visitors may not use a pointer. |
| Focus | Visible focus indicator on every interactive element, at least 2px. Use `:focus-visible`. | Focus must never be invisible. |
| Tap targets | Minimum 44 by 44 px with adequate spacing. | Reduces mis-taps on phones. |
| Images | Every build photo needs alt text; decorative banners use empty alt. | Screen reader users need the gallery described. |
| Forms | Every input has a visible label; errors are associated and announced. | Sign-in and upload errors must be perceivable. |
| Motion | Honor `prefers-reduced-motion`. | Prevents discomfort. |

## 8. Anti-Slop Rules

- **No gradients or glass as decoration.** The reference uses both. A solid scrim is allowed only for text legibility over an image.
- **No invented numbers.** No prices, bids, counts, or stats without a real source. Use `[REAL DATA]` or omit.
- **No decorative 3D blobs or orbs.** Excluded from the reference on purpose.
- **No generic icon library.** A small set of inline icons with clear meaning.
- **No pill on everything.** Pills are for chips only.
- **No second palette.** One neutral base plus one blue accent.

## 9. Implementation Notes

**Tailwind v4 theme.** Tokens live in `apps/web/app/globals.css` under `:root` and map to utilities with `@theme inline`. Utilities such as `bg-background`, `text-muted-foreground`, `border-border`, `bg-primary`, and `font-mono` resolve from these tokens.

**Fonts.** `apps/web/app/layout.tsx` loads Inter (`--font-inter`) and JetBrains Mono (`--font-jetbrains-mono`) with `next/font/google`.

**shadcn/ui.** Variable names follow the shadcn/ui contract, so initializing shadcn/ui against this project picks up the Vin Light theme without a second palette. Light is the base theme; a dark toggle is later work.

## 10. Open Decisions and Dependencies

| Item | Status | Notes |
| --- | --- | --- |
| Logo and wordmark | Open, owner decision | Not part of this system. |
| Dark mode | Deferred | The system is light. If added, both modes must pass contrast. |
| Decorative imagery | Open | 3D blobs and gradients are intentionally excluded. |
| shadcn/ui setup | Installed | Installed in `apps/web` and mapped to these tokens. Primitive components live in `components/ui`. |
| Contrast verification | Verified | Text pairings pass AA; the input boundary was set to `#8A90A6` to meet 3:1. Recheck after any palette change. |

## Related Documents

- `documents/vin-product-overview.md` (product source of truth)
- `documents/development/DESIGN.md` (visual direction)
- `documents/development/08-homepage-layout.md` (homepage layout)
- `documents/development/05-ux-flows.md`
- `documents/development/06-moderation-policy.md`
- `documents/development/03-erd.md`
