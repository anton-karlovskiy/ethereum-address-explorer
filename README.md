# UI

Task: https://gist.github.com/0xAsimetriq/36d23603807ecf03be1387ebaf2e7692

## Tech stack

- create-next-app
- TypeScript
- `react-hook-form`
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