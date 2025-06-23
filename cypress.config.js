
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://sandbox.moodledemo.net/login/index.php',
    specPattern: '**/*.feature',
    setupNodeEvents,
    chromeWebSecurity: false,
    viewportHeight: 960,
    viewportWidth: 1530,
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 50000
  }
});
