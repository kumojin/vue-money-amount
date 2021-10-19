module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    '@babel/preset-env',
  ],
  env: {
    test: {
      plugins: [
        'transform-require-context',
        [
          '@babel/plugin-proposal-private-property-in-object',
          { loose: true },
        ],
      ],
    },
  },
  plugins: [
    [
      '@babel/plugin-proposal-private-property-in-object',
      { loose: true },
    ],
  ],
};
