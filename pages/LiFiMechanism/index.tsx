import * as React from 'react';
import type { LiFiWidget } from '@lifi/widget';
import dynamic from 'next/dynamic';
import { useInterval } from 'react-use';

const DELAY = null; // TODO: update it to 100 when production

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
    DELAY
  );

  return (
    <LiFiWidgetDynamic
      config={{
        containerStyle: {
          width: 392,
          height: 640,
          border: `1px solid rgb(234, 234, 234)`,
          borderRadius: '16px',
          display: 'flex',
          maxWidth: 392
        }
      }} />
  );
};

export default LiFiMechanism;
