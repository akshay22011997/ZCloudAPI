const { test, expect } = require('@playwright/test');

test('GET /user (all users) should return a paginated list of users', async ({ request }) => {
  const response = await request.get('https://qa-api.zcloud.technology/api/master/user?page=0&size=20&sortBy=created&sortDirection=desc&roleType=STAFF', {
    headers: {
      'accept': '*/*',
      'Authorization': 'Bearer REPLACE_WITH_ACCESS_TOKEN', // Replace with a valid access token
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
  // Add more assertions based on the expected response structure
}); 