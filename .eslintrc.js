module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/src/**/*.spec.{j,t}s?(x)',
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        '**/tests/mocks/**/*.spec.{j,t}s?(x)',
        '**/tests/mocks/**/*.mock.{j,t}s?(x)',
        '**/tests/__mocks__/**/*.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
