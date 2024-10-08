const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://staging-cms-v3.pawnhero.ph/',
    watchForFileChanges: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
