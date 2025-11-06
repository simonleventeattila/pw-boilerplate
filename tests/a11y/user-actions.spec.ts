import { test, expect } from '../../base';

import AxeBuilder from '@axe-core/playwright';

test.describe('A11y tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('A11y test with tags on login page', async ({ page }, testInfo) => {
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    await page.waitForLoadState('networkidle');

    await test.step('check a11y', async () => {
      const { violations } = await new AxeBuilder({ page }).analyze();

      await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(violations, null, 2),
        contentType: 'application/json',
      });

      expect(violations).toHaveLength(3);
    });
  });
});
