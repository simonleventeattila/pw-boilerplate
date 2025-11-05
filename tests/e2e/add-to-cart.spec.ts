import { test, expect } from '../../base';

test.describe('Add products to cart tests', () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('/');
    await loginPage.doLogin();
  });

  test('Add to cart test', async ({ page, inventoryPage }) => {
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    await inventoryPage.addItemsToBasket();
    await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toContainText(
      'Remove'
    );
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText('Remove');
    await expect(page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')).toContainText(
      'Remove'
    );
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('3');
    await inventoryPage.removeItemFromBasket();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('2');
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toContainText(
      'Add to cart'
    );
  });
});
