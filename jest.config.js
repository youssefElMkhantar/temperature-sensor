/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  // 1. Tell Jest where to look for your spec files
  testMatch: ['**/tests/**/*.spec.ts'],

  // 2. ESM & TypeScript Support
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',

  // 3. Resolve the .js extensions you're using in your source
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
};
