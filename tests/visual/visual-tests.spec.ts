import { test, expect } from '../../base';

test.describe('Test pages visually (screenshot matching)', () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('/');
    await loginPage.doLogin();
  });

  test.fail('Test product page visually', async ({ page }) => {
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});
