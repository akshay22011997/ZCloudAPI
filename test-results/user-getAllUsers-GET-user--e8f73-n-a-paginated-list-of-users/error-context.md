# Test info

- Name: GET /user (all users) should return a paginated list of users
- Location: D:\ZcloudAPIAutomation\tests\user\getAllUsers.spec.js:3:1

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
    at D:\ZcloudAPIAutomation\tests\user\getAllUsers.spec.js:18:25
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test('GET /user (all users) should return a paginated list of users', async ({ request }) => {
   4 |   const response = await request.get('https://qa-api.zcloud.technology/api/master/user?page=0&size=20&sortBy=created&sortDirection=desc&roleType=STAFF', {
   5 |     headers: {
   6 |       'accept': '*/*',
   7 |       'Authorization': 'Bearer REPLACE_WITH_ACCESS_TOKEN', // Replace with a valid access token
   8 |     },
   9 |   });
  10 |   console.log('Status:', response.status());
  11 |   let data;
  12 |   try {
  13 |     data = await response.json();
  14 |   } catch (e) {
  15 |     data = await response.text();
  16 |   }
  17 |   console.log('Response:', data);
> 18 |   expect(response.ok()).toBeTruthy();
     |                         ^ Error: expect(received).toBeTruthy()
  19 |   // Add more assertions based on the expected response structure
  20 | }); 
```