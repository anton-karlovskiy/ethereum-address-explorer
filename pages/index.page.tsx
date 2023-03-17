import type { NextPage } from 'next';
import clsx from 'clsx';

import LiFiMechanism from './LiFiMechanism';
import PageTitle from 'parts/PageTitle';
import Banner from 'parts/Banner';
import PageLayoutWrapper from 'parts/PageLayoutWrapper';
import PageMainContentWrapper from 'parts/PageMainContentWrapper';
import {
  LAYOUT_SIDE_PADDING_CLASSES,
  PAGE_MAIN_CONTENT_WIDTH_CLASSES
} from 'utils/constants/styles';

const EthereumAddressExplorer: NextPage = () => {
  return (
    <PageLayoutWrapper>
      <Banner>
        <PageTitle>Xwap</PageTitle>
      </Banner>
      <PageMainContentWrapper
        className={clsx(
          'mx-auto',
          LAYOUT_SIDE_PADDING_CLASSES,
          PAGE_MAIN_CONTENT_WIDTH_CLASSES
        )}>
        <LiFiMechanism />
      </PageMainContentWrapper>
    </PageLayoutWrapper>
  );
};

export default EthereumAddressExplorer;
