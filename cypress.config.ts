import { defineConfig } from 'cypress';

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quiet: true,
      overwrite: false,
      html: false,
      json: true
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
      config.defaultCommandTimeout = 10000;
      config.responseTimeout = 20000;
      config.pageLoadTimeout = 120000;
      return config;
    }
  }
});
