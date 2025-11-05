import { Locator, Page } from '@playwright/test';


export class InventoryPage {
  page: Page;
  addBackpack: Locator;
  removeBackpack: Locator;
  addBikeLight: Locator;
  addTshirt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.removeBackpack = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.addBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.addTshirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  }
  //TODO: implement generic add/remove functions with parameters
  async addItemsToBasket() {
    await this.addBikeLight.click();
    await this.addTshirt.click();
    await this.addBackpack.click();
  }

  async removeItemFromBasket() {
    await this.removeBackpack.click();
  }
}
