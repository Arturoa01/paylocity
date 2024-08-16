const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      user: "TestUser414",
      pass: "X@/q2bcgI&iW"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
