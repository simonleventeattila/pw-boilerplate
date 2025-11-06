import { test, expect } from '@playwright/test';
const chance = require('chance').Chance();

const baseUrl = 'https://api.practicesoftwaretesting.com';
let jwtToken = '';
let emailAddress = chance.email();
test.describe('User actions tests', () => {
  test('Register new user', async ({ request }) => {
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
      email: emailAddress,
    };

    const response = await request.post(`${baseUrl}/users/register`, {
      data: requestBody,
    });
    const respBody = await response.json();
    expect(response.status()).toBe(201);
    expect(respBody).toHaveProperty('id');
  });

  test('Login user', async ({ request }) => {
    const requestBody = {
      password: 'SuperSecurwee@123',
      email: emailAddress,
    };

    const response = await request.post(`${baseUrl}/users/login`, {
      data: requestBody,
    });
    const respBody = await response.json();
    jwtToken = respBody.access_token;
    expect(response.status()).toBe(200);
    expect(respBody.token_type).toBe('bearer');
  });

  test('Get user information', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    const respBody = await response.json();

    expect(response.status()).toBe(200);
    expect(respBody.first_name).toBe('John');
  });
});
