# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Monorepo with a Svelte 5 + TypeScript + Vite frontend (`client/`) and an optional language-agnostic backend (`server/`).

- **pnpm workspaces** for monorepo management
- **Tailwind CSS v4** for utility-first styling (via `@tailwindcss/vite`)
- **Ky** for HTTP requests
- **OXC** (oxlint + oxfmt) for linting and formatting
- **mise** for Node version management
- **portless** for stable `https://*.localhost` dev URLs (wraps `vite` / `vite preview` so ports don't collide across projects)

## Common Commands

All client commands run from the `client/` directory, or from root via `pnpm --filter client`.

### Development

```bash
pnpm --filter client dev          # Start dev server (https://scaffold.localhost)
pnpm --filter client build        # Build for production
pnpm --filter client preview      # Preview production build (https://scaffold-preview.localhost)
```

### Code Quality

```bash
pnpm --filter client lint         # Lint and auto-fix with oxlint. ALWAYS run this after making frontend changes.
pnpm --filter client test         # Run unit tests with Vitest
pnpm --filter client test:e2e     # Run end-to-end tests with Playwright
```

### Environment

```bash
mise install                      # Install node and pnpm (defined in mise.toml)
pnpm add -g portless              # One-time global install for the .localhost proxy
```

## Architecture

### Monorepo Structure

```
client/                 # Svelte 5 frontend
├── src/
│   ├── assets/         # Static assets (CSS, images)
│   ├── components/     # Reusable Svelte components
│   └── views/          # Page-level components
├── e2e/                # Playwright end-to-end tests
├── public/             # Static public files
├── index.html          # HTML entry point
├── vite.config.ts
├── svelte.config.js
├── playwright.config.ts
└── package.json
server/                 # Backend (empty, language TBD)
```

### Path Aliases

- `@/` resolves to `client/src/` directory (configured in client/vite.config.ts)

### Application Entry Point

- `client/src/main.ts` creates the Svelte app and mounts it to `#app`

### Svelte 5 Features

- Runes enabled in `svelte.config.js` for modern reactive syntax
- Single-file components with `<script>`, `<template>`, and `<style>` sections
- TypeScript support via `lang="ts"` in script blocks
