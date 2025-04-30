const { test, expect } = require('@playwright/test');

test('GET /user/{id} should return user details', async ({ request }) => {
  const userId = 'REPLACE_WITH_VALID_USER_ID'; // Replace with a valid user ID
  const response = await request.get(`https://qa-api.zcloud.technology/api/master/user/${userId}`);
  console.log('Status:', response.status());
  let data;
  try {
    data = await response.json();
  } catch (e) {
    data = await response.text();
  }
  console.log('Response:', data);
  expect(response.ok()).toBeTruthy();
  // Add more assertions based on the expected user response structure
}); 