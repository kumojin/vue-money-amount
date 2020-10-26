module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/src/**/*.spec.[jt]s?(x)',
    '**/src/__tests__/*.[jt]s?(x)'
  ],
  moduleNameMapper: {
    '@assets(.*)$': '<rootDir>/src/assets/$1',
    '@modules(.*)$': '<rootDir>/src/modules/$1',
    '@styles(.*)$': '<rootDir>/src/styles/$1',
    '^vue$': 'vue/dist/vue.common.js'
  }
}
