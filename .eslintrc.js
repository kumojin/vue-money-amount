module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'class-methods-use-this': 0,
    'max-len': ['error', { code: 140 }],
    'no-shadow': 0,
    'import/no-named-as-default': 0,
    'no-void': 0,
    'no-cond-assign': 0,
    'no-plusplus': 0,
    'no-bitwise': 0,
    'dot-notation': 0,
    'keyword-spacing': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-empty': 0,
    semi: ['error', 'always'],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'operator-linebreak': ['error', 'after'],
    'no-use-before-define': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'var',
        next: 'return',
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'vue/max-len': ['error', { code: 140 }],
  },
  ignorePatterns: ['vite.config.ts', '**/*.mock.*', '**/*.spec.*'],
  overrides: [
    {
      files: [
        '**/src/**/*.spec.{j,t}s?(x)',
        '**/__tests__/*.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
