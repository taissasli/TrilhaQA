/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  plugins:{
    autoDelay:{
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true
    }
  },
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://automationpratice.com.br',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    homePage: "./pages/home.js",

    userPage: "./pages/user.js",
  },
  name: 'Projeto1'
}