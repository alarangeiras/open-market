module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    "ts-jest": {
      "compiler": "ttypescript"
    }
  },
  setupFiles: [
    "<rootDir>/jest.setup.ts"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts",
    "src/**/*.test.ts",
  ],
  coverageDirectory: './coverage'
};