module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
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
    'newline-before-return': ['error', 'always'],
  },
  ignorePatterns: ['vue.config.js', '**/*.mock.*', '**/*.spec.*'],
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
