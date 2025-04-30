const { test, expect } = require('@playwright/test');

// Replace these with actual values from a successful login
//const ACCESS_TOKEN = 'REPLACE_WITH_VALID_TOKEN';
const REFRESH_TOKEN = 'REPLACE_WITH_VALID_REFRESH_TOKEN';

test('POST /auth/logout should log out the user', async ({ request }) => {
  const response = await request.post('https://qa-api.zcloud.technology/api/master/auth/logout', {
    // headers: {
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${ACCESS_TOKEN}`,
    // },
    data: {
      refresh_token: REFRESH_TOKEN,
    },
  });
  console.log('Status:', response.status());
  let data;
  try {
    data = await response.json();
  } catch (e) {
    data = await response.text();
  }
  console.log('Response:', data);
  expect(response.ok()).toBeTruthy();
  expect(data.message).toBe('Successfully logged out');
  // You can add more assertions basedon the expected response structure
  
}); 