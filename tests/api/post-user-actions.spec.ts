import { test, expect } from '@playwright/test';
import { getProductsSchema } from '../../data/schema/get-products-schema';
import { validateSchemaZod } from 'playwright-schema-validator';
const chance = require('chance').Chance();

const baseUrl = 'https://api.practicesoftwaretesting.com';
let jwtToken = '';

test.describe('User actions tests', () => {
  let dataId = '';
  test('Register new user new user', async ({ request, page }) => {
    const requestBody = {
      first_name: 'John',
      last_name: 'Doe',
      address: {
        street: 'Street 1',
        city: 'City',
        state: 'State',
        country: 'Country',
        postal_code: '1234AA',
      },
      phone: '0987654321',
      dob: '1970-01-01',
      password: 'SuperSecurwee@123',
      email: chance.email(),
    };

    const response = await request.post(`${baseUrl}/users/register`, {
      data: requestBody,
    });
    const respBody = await response.json();
    expect(response.status()).toBe(201);
    expect(respBody).toHaveProperty('id');
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
