import { test, expect } from '../../base';
const baseUrl = `${process.env.BASE_URL}`;

test.describe('User actions test suite', () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto(`${baseUrl}`);
    await loginPage.doLogin();
  });

  test('Test user login and logout', async ({ page }) => {
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
  });
});
