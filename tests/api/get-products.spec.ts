import { test, expect } from '@playwright/test';
import { getProductsSchema } from '../../data/schema/get-products-schema';
import { validateSchemaZod } from 'playwright-schema-validator';

const baseUrl = 'https://api.practicesoftwaretesting.com';

test.describe('Get verb tests', () => {
  let dataId = '';
  test('Get products test', async ({ request, page }) => {
    const response = await request.get(`${baseUrl}/products`);
    const respBody = await response.json();
    expect(response.status()).toBe(200);
    dataId = respBody.data[0].id;

    await validateSchemaZod({ page }, respBody, getProductsSchema);
  });

  test('Get product', async ({ request, page }) => {
    const response = await request.get(`${baseUrl}/products/${dataId}`);
    const respBody = await response.json();

    expect(response.status()).toBe(200);
    expect(respBody.name).toBe('Combination Pliers');
    expect(typeof respBody.price).toBe('number');
    expect(typeof respBody.price).toBeFalsy;
  });
});
