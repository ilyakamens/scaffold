import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'pnpm build && pnpm preview',
    url: 'https://scaffold-preview.localhost',
    reuseExistingServer: !process.env.CI,
  },
  use: {
    ignoreHTTPSErrors: true,
  },
  testDir: 'e2e',
});
