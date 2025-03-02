import { test, expect } from '@playwright/test';

test('should take a screenshot and record a video', async ({ page }) => {
  // Enable video recording in the test configuration
  await page.goto('https://example.com');

  // Take a screenshot of the page
  await page.screenshot({ path: 'screenshot.png' });

  // Validate title of the page
  const title = await page.title();
  expect(title).toBe('Example Domain');

  // Playwright automatically records video if configured
});
