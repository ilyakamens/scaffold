import { defineConfig } from '@playwright/test';

const baseURL = 'http://localhost:4173';

export default defineConfig({
  webServer: {
    command: 'pnpm build && pnpm preview:test',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL,
  },
  testDir: 'e2e',
});
