module.exports = {
  verbose: true,
  resetMocks: false,
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/src/**/*.spec.[jt]s?(x)',
    '**/src/__tests__/*.[jt]s?(x)',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/*', '<rootDir>/coverage/*', '<rootDir>/logs/*'],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    'node_modules/?!(vue-plugin-load-script)',
  ],
  transform: {
    '.*\\.(vue)$': '@vue/vue2-jest',
    '^.+\\.tsx?$': ['ts-jest', {}],
  },
};
