const { defineConfig } = require("cypress");
const browserfy = require("@cypress/browserify-preprocessor");


module.exports = defineConfig({
  env: {
    baseUrl:"https://itera-qa.azurewebsites.net"
  },

  e2e: {
    setupNodeEvents(on, config) {
      let options = browserfy.defaultOptions;
    options.browserifyOptions.transform[1][1].plugins.push([
      "module-resolver",
      {
        alias: {
          "@tests": "./tests",
        },
      },
    ]);
      on("file:preprocessor", browserfy(options));
    },
    specPattern: 'tests/scenarios/**/*.js',
    screenshotOnRunFailure:true,
    video: false
  },
});
