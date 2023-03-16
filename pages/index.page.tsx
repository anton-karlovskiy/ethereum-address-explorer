import type { NextPage } from 'next';
import clsx from 'clsx';

import LiFiMechanism from './LiFiMechanism';
import PageTitle from 'parts/PageTitle';
import PageLayoutWrapper from 'parts/PageLayoutWrapper';
import PageMainContentWrapper from 'parts/PageMainContentWrapper';
import {
  LAYOUT_SIDE_PADDING_CLASSES,
  PAGE_MAIN_CONTENT_WIDTH_CLASSES
} from 'utils/constants/styles';

const EthereumAddressExplorer: NextPage = () => {
  return (
    <PageLayoutWrapper>
      <PageMainContentWrapper
        className={clsx(
          'mx-auto',
          LAYOUT_SIDE_PADDING_CLASSES,
          PAGE_MAIN_CONTENT_WIDTH_CLASSES
        )}>
        <PageTitle>Smart Xwap</PageTitle>
        <LiFiMechanism />
      </PageMainContentWrapper>
    </PageLayoutWrapper>
  );
};

export default EthereumAddressExplorer;
