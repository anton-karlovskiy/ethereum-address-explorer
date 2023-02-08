// MEMO: inspired by:
// - https://theodorusclarence.com/blog/nextjs-storybook-tailwind
// - https://storybook.js.org/blog/get-started-with-storybook-and-next-js

const path = require('path');

module.exports = {
  stories: [
    '../**/*.stories.mdx',
    '../**/*.stories.@(js|jsx|ts|tsx)'
  ],
  /** Expose public folder to storybook as static */
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: (config) => {
    // MEMO: inspired by https://github.com/storybookjs/storybook/issues/11639
    config.resolve.modules = [
      path.resolve(__dirname, '../'),
      'node_modules'
    ];

    // TODO: should follow https://storybook.js.org/docs/react/workflows/faq#how-do-i-setup-storybook-to-share-webpack-configuration-with-nextjs
    // MEMO: inspired by https://github.com/storybookjs/storybook/issues/9070#issuecomment-635895868
    const fileLoaderRule = config.module.rules.find(
      rule => rule.test?.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      use: ['@svgr/webpack']
    });

    return config;
  }
}