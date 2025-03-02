import { test, expect } from '@playwright/test';

test('should load the homepage and check title', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});
