import type { NextPage } from 'next';
import clsx from 'clsx';

import PageTitle from 'parts/PageTitle';
import PageLayoutWrapper from 'parts/PageLayoutWrapper';
import PageMainContentWrapper from 'parts/PageMainContentWrapper';
import PortfolioUI from 'components/demos/Portfolio';
import {
  LAYOUT_SIDE_PADDING_CLASSES,
  PAGE_MAIN_CONTENT_WIDTH_CLASSES
} from 'utils/constants/styles';

const Home: NextPage = () => {
  return (
    <PageLayoutWrapper>
      <PageMainContentWrapper
        className={clsx(
          'mx-auto',
          LAYOUT_SIDE_PADDING_CLASSES,
          PAGE_MAIN_CONTENT_WIDTH_CLASSES
        )}>
        <PageTitle>Ethereum Address Explorer</PageTitle>
        <PortfolioUI />
      </PageMainContentWrapper>
    </PageLayoutWrapper>
  );
};

export default Home;
