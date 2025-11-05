import { test, expect } from '../../base';

const baseUrl = 'https://www.saucedemo.com/';

test.describe('Add to cart test', () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto(`${baseUrl}`);
    await loginPage.doLogin();
                                                                                                                                                                                                                                                                                                                                                                                                                 
    
  });

test('Add to cart test ', async ({ page, loginPage }) => {

  await loginPage.doLogin();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
});

test('Login and logout', async ({ page, loginPage }) => {

  await loginPage.doLogin();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await expect(page.locator('#root')).toContainText('Swag Labs');
});


 
});

