module.exports = {
  verbose: true,
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: [
    '**/src/**/*.spec.[jt]s?(x)',
    '**/src/__tests__/*.[jt]s?(x)',
  ],
  moduleNameMapper: {
    '@assets(.*)$': '<rootDir>/src/assets/$1',
    '@modules(.*)$': '<rootDir>/src/modules/$1',
    '@styles(.*)$': '<rootDir>/src/styles/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  transformIgnorePatterns: [
    'node_modules/?!(vue-plugin-load-script)',
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
