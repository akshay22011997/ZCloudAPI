const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://qa-api.zcloud.technology/api/master',
  },
  testDir: './tests',
}); 