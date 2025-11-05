import { Locator, Page } from '@playwright/test';
import 'dotenv/config';
const chance = require('chance').Chance();

export class CheckoutPage {
  page: Page;
  firstNameField: Locator;
  lastNameField: Locator;
  zipCodeField: Locator;
  continueBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameField = page.locator('[data-test="firstName"]');
    this.lastNameField = page.locator('[data-test="lastName"]');
    this.zipCodeField = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
  }

  async doCheckout(
    firstName: string = chance.first(),
    lastName: string = chance.last(),
    zipCode: string = chance.zip()
  ) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.zipCodeField.fill(zipCode);
    await this.continueBtn.click();
  }
}
