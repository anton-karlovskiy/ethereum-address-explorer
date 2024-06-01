/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './.storybook/**/*.{js,ts,jsx,tsx}',
    './utils/constants/styles.ts',
    './pages/**/*.{js,ts,jsx,tsx}',
    './parts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      // MEMO: `Tailwind does not automatically escape font names for you.`
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
      arial: ['Arial', 'sans-serif', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      // MEMO: inspired by https://material-ui.com/customization/default-theme/
      zIndex: {
        customMobileStepper: 1000,
        customSpeedDial: 1050,
        customAppBar: 1100,
        customDrawer: 1200,
        customModal: 1300,
        customSnackbar: 1400,
        customTooltip: 1500,
        customBackground: -100
      },
      colors: {
        // eslint-disable-next-line max-len
        // MEMO: inspired by https://www.figma.com/file/XvTmKaeVLTg4MYfqweCdiZ/(Z)-DESIGN-SYSTEM-SOURCE?node-id=1023%3A36350&t=xf3bzSrmmHQWm9My-0
        stormGray: {
          25: '#fcfcfd',
          50: '#f9fafb',
          100: '#f2f4f7',
          200: '#eaecf0',
          300: '#d0d5dd',
          400: '#98a2b3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1d2939',
          900: '#101828'
        },
        // eslint-disable-next-line max-len
        // MEMO: inspired by https://www.figma.com/file/aHRPveDu0VfY8tjnrSHqdG/Finity-Design-System-%F0%9F%92%9C-(Community)?node-id=1194%3A28274&t=7w7SgbFNnGrvmitU-0
        fiord: {
          100: '#747c90',
          200: '#656e85',
          300: '#5c657d',
          400: '#525c76',
          500: '#49536e',
          600: '#3a4662',
          700: '#2c3857',
          800: '#192648',
          900: '#0f1d40'
        },
        blueRibbon: {
          100: '#d3e5fe',
          200: '#a7c9fd',
          300: '#7ba8f9',
          400: '#598cf4',
          500: '#2561ed',
          600: '#1b4acb',
          700: '#1236aa',
          800: '#0b2589',
          900: '#071971'
        },
        // MEMO: inspired by https://javisperez.github.io/tailwindcolorshades
        // eslint-disable-next-line max-len
        // RE: https://javisperez.github.io/tailwindcolorshades/?orange=F26A1D&blue-chill=15A0A3&azure-radiance=1A7EFF&electric-violet=9747FF&malachite=06DD76&dodger-blue=0A8FF6&breaker-bay=4D9D98&tradewind=65B3AE&chateau-green=3EB66A&mako=41474D&jet-stream=A8D0CD&jagged-ice=CCE9E7&dove-gray=696969&plantation=2E524E&alizarin-crimson=E22F3D&cape-cod=464646&silver=C4C4C4&white=FFFFFF&shark=1C1E20&black=000000
        black: '#000000',
        shark: '#1c1e20',
        white: '#ffffff',
        silver: '#c4c4c4',
        capeCod: '#464646',
        alizarinCrimson: '#e22f3d',
        plantation: '#2e524e',
        doveGray: '#696969',
        jaggedIce: '#cce9e7',
        jetStream: '#a8d0cd',
        mako: '#41474d',
        chateauGreen: '#3eb66a',
        tradewind: '#65b3ae',
        breakerBay: '#4d9d98',
        dodgerBlue: '#0a8ff6',
        malachite: '#06dd76',
        electricViolet: '#9747ff',
        azureRadiance: '#1a7eff',
        blueChill: '#15a0a3',
        orange: '#f26a1d',
        primary: {
          50: '#f4fbfe',
          100: '#eaf7fc',
          200: '#caeaf8',
          300: '#a9ddf3',
          400: '#69c4eb',
          500: '#29abe2',
          600: '#259acb',
          700: '#1f80aa',
          800: '#196788',
          900: '#14546f'
        },
        secondary: '#1a1a1a'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // MEMO: inspired by https://tailwindcss.com/docs/plugins#line-clamp
    require('@tailwindcss/forms')
  ]
};
