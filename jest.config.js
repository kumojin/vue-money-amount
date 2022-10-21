module.exports = {
  verbose: true,
  resetMocks: false,
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/src/**/*.spec.[jt]s?(x)',
    '**/src/__tests__/*.[jt]s?(x)',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/*', '<rootDir>/coverage/*', '<rootDir>/logs/*'],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
  },
  transformIgnorePatterns: [
    'node_modules/?!(vue-plugin-load-script)',
  ],
  transform: {
    '.*\\.(vue)$': '@vue/vue2-jest',
    '^.+\\.tsx?$': ['ts-jest', {}],
  },
};
