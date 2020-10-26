const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};
