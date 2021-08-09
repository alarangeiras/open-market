module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
    },
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  setupFiles: ['<rootDir>/jest.setup.ts'],
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.test.ts',
    '!<rootDir>/src/**/main/**/*',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/import-data.ts',
  ],
};