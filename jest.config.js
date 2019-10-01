// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Allows for a lable to be printed alongside a test while it is running
  displayName: 'React-Conflux',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules', '/website'],

  // Indicates whether each individual test should be reported during the run
  verbose: true
};
