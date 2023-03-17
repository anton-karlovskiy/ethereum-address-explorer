import * as React from 'react';
import type { LiFiWidget } from '@lifi/widget';
import dynamic from 'next/dynamic';
import { useInterval } from 'react-use';

const DELAY = process.env.NEXT_PUBLIC_LIFI_ERASE_DELAY || null; // TODO: update it to 100 when production

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TOKEN_CONTRACT_ADDRESS = '0xba98c0fbebc892f5b07a42b0febd606913ebc981';

const LiFiWidgetDynamic = dynamic(
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
    <LiFiWidgetDynamic
      config={{
        // tokens: {
        //   featured: [
        //     {
        //       address: TOKEN_CONTRACT_ADDRESS,
        //       symbol: 'SMTX',
        //       decimals: 18,
        //       chainId: 1,
        //       name: 'SmartXwap',
        //       logoURI: '/featured-token-logo.png'
        //     }
        //   ]
        // }, // MEMO: display for a launch show
        appearance: 'light', // MEMO: update to auto for a launch show
        disableAppearance: true, // MEMO: display for a launch show
        disableI18n: true, // MEMO: display for a launch show
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
            primary: { main: '#29abe2' },
            secondary: { main: '#1a1a1a' }
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
