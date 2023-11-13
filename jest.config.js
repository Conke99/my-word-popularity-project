module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/tests/integration/"],
  testMatch: ["<rootDir>/tests/**/*.test.js"],
  coverageDirectory: "coverage",
  collectCoverageFrom: ["<rootDir>/src/**/*.js"],
  coverageReporters: ["text", "lcov"],
};
