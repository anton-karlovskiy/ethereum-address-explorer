/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  pageExtensions: ['page.tsx', 'page.ts'],
  images: {
    // MEMO: https://nextjs.org/docs/api-reference/next/image#dangerously-allow-svg
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox;',
    domains: [
      'dl.airtable.com',
      'v5.airtableusercontent.com'
    ]
  }
};

module.exports = nextConfig;
