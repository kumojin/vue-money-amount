const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
    }

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      loader: ['babel-loader', 'awesome-typescript-loader'],
      include:  path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};
