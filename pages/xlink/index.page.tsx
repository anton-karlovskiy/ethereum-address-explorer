import type { NextPage } from 'next';
import clsx from 'clsx';

import UniswapMechanism from 'components/UniswapMechanism';
import PageTitle from 'parts/PageTitle';
import PageLayoutWrapper from 'parts/PageLayoutWrapper';
import PageMainContentWrapper from 'parts/PageMainContentWrapper';
import { UNISWAP_V2_PAIR_ADDRESS, DEXTOOLS_CHART_ENABLED } from 'config/launch';
import {
  LAYOUT_SIDE_PADDING_CLASSES,
  PAGE_MAIN_CONTENT_WIDTH_CLASSES
} from 'utils/constants/styles';

const CHART_TITLE = '$XLINK Trading Chart (XLINK/ETH)';

const XLINK: NextPage = () => {
  return (
    <PageLayoutWrapper>
      <PageMainContentWrapper
        className={clsx(
          'mx-auto',
          LAYOUT_SIDE_PADDING_CLASSES,
          PAGE_MAIN_CONTENT_WIDTH_CLASSES
        )}>
        <PageTitle>$XLINK</PageTitle>
        <div
          className={clsx(
            'space-y-20',
            'flex',
            'flex-col',
            'items-center',
            'md:items-start',
            'md:flex-row',
            'md:justify-center',
            'md:space-x-20',
            'md:space-y-0'
          )}>
          <UniswapMechanism />
          {DEXTOOLS_CHART_ENABLED && (
            // eslint-disable-next-line max-len
            // TODO: Refused to display 'https://www.dextools.io/' in a frame because it set 'X-Frame-Options' to 'sameorigin'.
            // eslint-disable-next-line max-len
            // RE: https://github.com/dextools-io/chart-widget & https://www.reddit.com/r/CryptoGemDiscovery/comments/10sfnjk/dextools_has_finally_released_an_embed_chart/
            <iframe
              id='dextools-widget'
              title={CHART_TITLE}
              width='500'
              height='400'
              // eslint-disable-next-line max-len
              src={`https://www.dextools.io/widgets/en/ether/pe-light/${UNISWAP_V2_PAIR_ADDRESS}?theme=light&chartType=2&chartResolution=30&drawingToolbars=false`}>
            </iframe>
          )}
        </div>
      </PageMainContentWrapper>
    </PageLayoutWrapper>
  );
};

export default XLINK;
