module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    '@babel/preset-env',
  ],
  env: {
    test: {
      plugins: ['transform-require-context'],
    },
  },
  plugins: [
    [
      '@babel/plugin-proposal-private-property-in-object',
      { loose: true },
    ],
  ],
};
