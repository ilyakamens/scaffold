import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: process.env.CI
    ? {
        command: 'pnpm build && vite preview --port 4173',
        url: 'http://localhost:4173',
      }
    : {
        command: 'pnpm build && pnpm preview',
        url: 'https://scaffold-preview.localhost',
        reuseExistingServer: true,
      },
  use: {
    ignoreHTTPSErrors: true,
  },
  testDir: 'e2e',
});
