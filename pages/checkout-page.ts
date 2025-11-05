import { Locator, Page } from '@playwright/test';
import 'dotenv/config';
import { test, expect } from '../base';

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
    firstName: string = 'FirstName',
    lastName: string = 'lastName',
    zipCode: string = '12345'
  ) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.zipCodeField.fill(zipCode);
    await this.continueBtn.click();
  }
}
