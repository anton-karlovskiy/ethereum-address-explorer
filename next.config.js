/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@lifi/widget']);

const { PAGES } = require('./utils/constants/links');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    // RE: https://github.com/Uniswap/widgets/issues/404#issuecomment-1404275119
    // TODO: it does not work
    // config.resolve.alias['@uniswap/conedison'] = '@uniswap/conedison/dist';

    return config;
  },
  pageExtensions: ['page.tsx', 'page.ts'],
  images: {
    // MEMO: https://nextjs.org/docs/api-reference/next/image#dangerously-allow-svg
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox;',
    domains: [
      'static.alchemyapi.io',
      'token-icons.s3.amazonaws.com'
    ]
  },
  async redirects() {
    return [
      {
        source: PAGES.HOME,
        destination: PAGES.XWAP,
        permanent: true
      }
    ];
  }
};

module.exports = withTM(nextConfig);
