const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {

    env: {
      requestMode: true,
    },
    baseUrl: "https://www.saucedemo.com",
    baseApiUrl: "https://restful-booker.herokuapp.com",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
     
    },


  },
});
