import { test, expect } from '../../base';

test.describe('Test pages visually (screenshot matching)', () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('/');
    await loginPage.doLogin();
  });

  test.fail('Test product page visually', async ({ page }) => {
    await page.waitForTimeout(5000);
    await expect(page).toHaveScreenshot('inventory.png', { fullPage: true });
  });
});
