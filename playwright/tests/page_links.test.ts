import { test, expect } from '@playwright/test';

test('Navigate to Tenis Stołowy and check ranking page', async ({ page }) => {
    // Step 1: Go to the homepage
    await page.goto('https://turniejeamatorskie.info/', { waitUntil: 'domcontentloaded' });

    // Step 2: Click on "Tenis stołowy" in the main navigation
    const tenisStolowyLink = page.locator('a.size4[href="/dyscypliny/2-tenis-stolowy"]');

    await tenisStolowyLink.waitFor({ state: 'visible', timeout: 2000 });
    await tenisStolowyLink.click();

    // Verify the URL changed correctly
    await expect(page).toHaveURL('https://turniejeamatorskie.info/dyscypliny/2-tenis-stolowy');

    // Step 3: Click on the link to access the full ranking
    const moreLink = page.locator('a:has-text("więcej")');

    await moreLink.waitFor({ state: 'visible', timeout: 2000 });
    await moreLink.click();

    // Verify the URL changed to the ranking page
    await expect(page).toHaveURL('https://turniejeamatorskie.info/dyscypliny/2-tenis-stolowy/ranking');
});
