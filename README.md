# Scaffold

Monorepo with a Svelte 5 + TypeScript + Vite + Pico CSS + Ky + Oxc frontend (`client/`) and an optional language-agnostic backend (`server/`).

## Environment Setup

This project uses [mise](https://mise.jdx.dev/) for Node version management.

```sh
# Install mise (if not already installed)
curl https://mise.run | sh

# Install Node and pnpm
mise trust
mise install
pnpm i
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

## Development

Run these from the `client/` directory, or from the repo root with `--filter client` (e.g. `pnpm --filter client dev`).

```sh
pnpm dev          # Start dev server (http://localhost:5173)
pnpm lint         # Lint and format
pnpm test         # Run unit tests
pnpm test:e2e     # Run end-to-end tests
pnpm build        # Build for production
pnpm preview      # Preview production build
```
