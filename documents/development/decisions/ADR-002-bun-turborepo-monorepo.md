# ADR-002: Bun and Turborepo monorepo

## Ringkasan (Bahasa Indonesia)

Vin memakai monorepo Turborepo yang dikelola Bun. Workspace berada di `apps/*` dan `packages/*`. Workspace `apps/docs` bawaan starter sudah dihapus, dan dokumentasi sekarang disimpan sebagai Markdown di folder root `documents/`.

## Status

Accepted.

## Context

Vin needs room for multiple apps and shared packages without restructuring later. The Turborepo starter shipped a separate `apps/docs` workspace. Documentation now lives as Markdown under the root `documents/` folder, so that workspace was removed.

## Decision

Use a Bun-managed Turborepo monorepo. Bun is the package manager (`1.4.0`), workspaces are `apps/*` and `packages/*`, and Turbo orchestrates tasks. Documentation is not a workspace.

## Consequences

- Shared code can be added under `packages/*`, and new apps under `apps/*`, without changing the layout.
- Turbo caches and orders `build`, `lint`, `check-types`, and `dev` from `turbo.json`.
- Removing `apps/docs` drops one workspace to build and maintain.
- Markdown formatting is handled by Prettier at the repo root.
- New work must follow the workspace layout and the Turbo task conventions.

## Related

- [Vin Product Overview](../../vin-product-overview.md)
