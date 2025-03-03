import { test, expect } from '@playwright/test';

test('should interact with multiple pages', async ({ context }) => {
  // Open two pages in the same browser context
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  // Navigate to two different URLs
  await page1.goto('https://example.com');
  await page2.goto('https://example.org');

  // Wait for the link to be present before clicking
  await page1.waitForSelector('a'); // Ensure the link exists
  await page1.click('a');

  // Verify the first page's title
  const title1 = await page1.title();
  expect(title1).toBe('Example Domains'); // ✅ Correct title for example.com

  // Verify the second page's title
  const title2 = await page2.title();
  expect(title2).toBe('Example Domain'); // ✅ Correct title for example.org

  // Close the pages
  await page1.close();
  await page2.close();
});
