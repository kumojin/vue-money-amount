export default {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  features: {
    postcss: false,
  },

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  framework: {
    name: '@storybook/vue-vite',
    options: {},
  },

  docs: {
    autodocs: true,
  },

  async viteFinal(config) {
    const { resolve } = await import('node:path');
    const { fileURLToPath } = await import('node:url');
    const __dirname = fileURLToPath(new URL('.', import.meta.url));

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, '../src'),
    };

    return config;
  },
};
