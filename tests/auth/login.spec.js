const { test, expect } = require('@playwright/test');

test('POST /auth/login should return a token for valid credentials', async ({ request }) => {
  const response = await request.post('https://qa-api.zcloud.technology/api/master/auth/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username: 'superadmin@zcloud.technology',
      password: 'Zcloud@2025',
    },
  });
  console.log('Status:', response.status());
  const data = await response.json();
  console.log('Response:', data);
  expect(response.ok()).toBeTruthy();
  expect(data.data).toHaveProperty('access_token');
}); 