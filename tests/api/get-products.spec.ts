import { test, expect } from '@playwright/test';
import { getProductsSchema } from '../../data/schema/get-products-schema';
import { validateSchemaZod } from 'playwright-schema-validator';

const baseUrl = 'https://api.practicesoftwaretesting.com';

test.describe('Get verb tests', () => {
  test('Get products test', async ({ request, page }) => {
    const response = await request.get(`${baseUrl}/products`);
    const respBody = await response.json();
    expect(response.status()).toBe(200);

    await validateSchemaZod({ page }, respBody, getProductsSchema);
  });
});
