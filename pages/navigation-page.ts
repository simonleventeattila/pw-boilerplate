import { Locator, Page } from '@playwright/test';
import { test, expect } from '../base';

export class NavPage {
  page: Page;
  signInBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInBtn = page.locator('[data-test="nav-sign-in"]');
  }
}
