// Docs: https://jestjs.io/docs/en/configuration.html
import type { Config } from 'jest';
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['src/index.ts', 'src/test'],
  coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: 'coverage',
  testTimeout: 30000,
  verbose: true,
  moduleFileExtensions: ['js', 'ts'],
  modulePaths: ['<rootDir>/src'],
};

export default config;
