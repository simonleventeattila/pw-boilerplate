import { test as baseTest } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { InventoryPage } from './pages/inventory-page';
import { CheckoutPage } from './pages/checkout-page';
require('dotenv').config()

type MyFixtures = {
  loginPage: LoginPage;
  checkoutPage: CheckoutPage;
  inventoryPage: InventoryPage;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;

if (!USER_NAME || !PASSWORD) {
  throw new Error('Missing TEST_USERNAME or TEST_PASSWORD environment variable(s). Set them in GitHub repo secrets.');
}  
    await use(new LoginPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});

export { expect } from '@playwright/test';
