# UI

Task: https://gist.github.com/0xAsimetriq/36d23603807ecf03be1387ebaf2e7692

## Tech stack

- create-next-app
- TypeScript
- `react-hook-form`
- `react-error-boundary`
- ESLint (`eslint-config-google`)
- `husky` & `lint-staged`
- `tailwindcss`
- `storybook`
- `ethers`
- `alchemy-sdk`

## Getting the project up and running

```bash
yarn install
# development
yarn dev
# production
yarn build
yarn start
```

## TODOs

- Upgrade Next.js to v13.x.
- Prepare notes for approaches e.g. responsive UI, performance optimization by parallelizing API calls.
  * Responsive table (DEMO)
  * Calls are parallelized in the portfolio API for performance. (DEMO)
  * Next.js API feature is used for not exposing API keys to the browser client. (DEMO)
  * Storybook is set up for component library of the design system. (DEMO)
  * Error boundaries are set up. (DEMO)
  * Accessibility (DEMO)
  * react-query's benefits like caching, dedup, exposed utilities, background fetching for invalidation etc (DEMO)
  * Reduced CLS by reserving space for error messages & applying skeleton UI (DEMO)
  * Declarative and performance-oriented form validation using `react-hook-form` (DEMO)
- Prepare notes for nice-to-have things.
  * pagination for displaying a lot of tokens (SUGGESTION)
  * Favicon and open graph images (SUGGESTION)

app TODOs
Before
- Set the logo.
- Manifest set-up
- Improve the mobile UI.
- Improve the background (e.g. gradient or SVG)
- Update `PRIMARY_COLOR` & "#29abe2" to the primary color.
- Update `SECONDARY_COLOR` to the secondary color.
- Update "#c2e0ff14" for border color.
- Update "#0a1929" for background color.
- Update "#b2bac2" for text color.
- Whitelist bridges.
- Whitelist exchanges.
- Add a menu with main page links (future feature releases).
- Add a tradingview chart for the token.
- Add a footer with social media links. e.g. https://www.bitdao.io
- Add a home page. e.g. https://app.uniswap.org/#/?intro=true
- Add a token pie chart. e.g. https://www.bitdao.io
- Add https://www.bitdao.io hero text animation.

## On Launch
- Set `TOKEN_CONTRACT_ADDRESS` to the correct address.
- Set `UNISWAP_V2_PAIR_ADDRESS` to the correct address.
- Handle `MEMO: display for a launch show`.