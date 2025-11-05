import { Locator, Page } from '@playwright/test';
import 'dotenv/config';

export class LoginPage {
  page: Page;
  userNameField: Locator;
  pswField: Locator;
  submitLoginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameField = page.locator('[data-test="username"]');
    this.pswField = page.locator('[data-test="password"]');
    this.submitLoginBtn = page.locator('[data-test="login-button"]');
  }

  async doLogin(userName: string = `${process.env.USER_NAME}`, password: string = `${process.env.PASSWORD}`) {
    console.log(`Logging in with user: ${userName}`);
    console.log(`Using password: ${password}`);
    await this.userNameField.fill(userName);
    await this.pswField.fill(password);
    await this.submitLoginBtn.click();
  }
}
