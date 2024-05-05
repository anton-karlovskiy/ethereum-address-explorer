import * as React from 'react';
import type { LiFiWidget } from '@lifi/widget';
import dynamic from 'next/dynamic';
import { useInterval } from 'react-use';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TOKEN_CONTRACT_ADDRESS, PRIMARY_COLOR, SECONDARY_COLOR } from 'config/launch';

const DELAY = process.env.NEXT_PUBLIC_LIFI_ERASE_DELAY || null; // TODO: update it to 100 when production

const DynamicLiFiWidget = dynamic(
  () => import('@lifi/widget').then(module => module.LiFiWidget) as any,
  {
    ssr: false
  }
) as typeof LiFiWidget;

const LiFiMechanism = () => {
  useInterval(
    () => {
      const specificHref = 'https://li.fi';

      // Select all anchor tags with the specific href value
      const anchors = document.querySelectorAll(`a[href="${specificHref}"]`);

      // Loop through the anchor elements and remove them
      anchors.forEach(anchor => {
        anchor.remove();
      });

      console.log(`${anchors.length} anchor(s) removed.`);
    },
    DELAY ? parseInt(DELAY, 10) : null
  );

  return (
    <DynamicLiFiWidget
      config={{
        tokens: {
          featured: [
            {
              address: TOKEN_CONTRACT_ADDRESS,
              symbol: 'XPL',
              decimals: 18,
              chainId: 1,
              name: 'CrossPulse',
              logoURI: '/images/featured-token-logo.png'
            }
          ]
        }, // MEMO: display for a launch show
        appearance: 'light', // MEMO: display for a launch show (update to auto for a launch show)
        // disableAppearance: true, // MEMO: display for a launch show
        // disableI18n: true, // MEMO: display for a launch show
        languages: {
          default: 'en',
          allow: ['en']
        }, // MEMO: display for a launch show
        containerStyle: {
          border: `1px solid rgb(234, 234, 234)`,
          borderRadius: '6px',
          width: 560,
          height: 640,
          display: 'flex',
          maxWidth: 560
        },
        theme: {
          palette: {
            primary: { main: PRIMARY_COLOR },
            secondary: { main: SECONDARY_COLOR }
          },
          shape: {
            borderRadius: 8,
            borderRadiusSecondary: 8
          },
          typography: {
            fontFamily: 'Inter'
          }
        },
        variant: 'expandable',
        disableTelemetry: true
      }} />
  );
};

export default LiFiMechanism;
