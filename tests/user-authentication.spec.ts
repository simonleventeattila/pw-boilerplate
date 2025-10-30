import { test, expect } from '../base';

const baseUrl = 'https://www.saucedemo.com/';

test.describe('User authentication test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}`);
  });

test('Login user ', async ({ page, loginPage }) => {

  await loginPage.doLogin('standard_user', 'secret_sauce');
  await expect(page.locator('[data-test="title"]')).toBeVisible();
});
 
});

