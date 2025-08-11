const js = require('@eslint/js');
const vue = require('eslint-plugin-vue');
const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const vueParser = require('vue-eslint-parser');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  ...vue.configs['flat/essential'],
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'class-methods-use-this': 0,
      'max-len': ['error', { code: 140 }],
      'no-shadow': 0,
      'no-void': 0,
      'no-cond-assign': 0,
      'no-plusplus': 0,
      'no-bitwise': 0,
      'dot-notation': 0,
      'keyword-spacing': 'warn',
      'no-empty': 0,
      semi: ['error', 'always'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
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
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 2020,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': typescript,
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/max-len': ['error', { code: 140 }],
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    ignores: [
      'vite.config.ts',
      '**/*.mock.*',
      '**/*.spec.*',
      'dist/**',
      '**/*.stories.{js,ts}',
    ],
  },
];
