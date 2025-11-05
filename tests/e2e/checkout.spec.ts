import { test, expect } from '../../base';


test.describe('Add products to cart tests', () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto("/");
    await loginPage.doLogin();
  });

  test('Checkout test', async ({ page, checkoutPage, inventoryPage }) => {
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    await inventoryPage.addItemsToBasket();

      await page.locator('[data-test="shopping-cart-link"]').click();
      await expect(page.locator('[data-test="item-0-title-link"]')).toContainText('Sauce Labs Bike Light');
      await expect(page.locator('[data-test="item-4-title-link"]')).toContainText('Sauce Labs Backpack');
      await expect(page.locator('[data-test="item-1-title-link"]')).toContainText('Sauce Labs Bolt T-Shirt');

      await page.locator('[data-test="checkout"]').click();
      await checkoutPage.doCheckout();

      await page.locator('[data-test="total-label"]').click();
      await expect(page.locator('[data-test="subtotal-label"]')).toContainText('Item total: $55.97');
      await expect(page.locator('[data-test="total-label"]')).toContainText('Total: $60.45');
      await page.locator('[data-test="finish"]').click();
      await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');


  });
});
