import type { NextPage } from 'next';
import clsx from 'clsx';

import PageTitle from 'parts/PageTitle';
import Banner from 'parts/Banner';
import PageLayoutWrapper from 'parts/PageLayoutWrapper';
import PageMainContentWrapper from 'parts/PageMainContentWrapper';
import {
  LAYOUT_SIDE_PADDING_CLASSES,
  PAGE_MAIN_CONTENT_WIDTH_CLASSES
} from 'utils/constants/styles';

const Home: NextPage = () => {
  return (
    <PageLayoutWrapper>
      <Banner>
        <PageTitle>Let&apos;s go with AI!</PageTitle>
      </Banner>
      <PageMainContentWrapper
        className={clsx(
          'mx-auto',
          LAYOUT_SIDE_PADDING_CLASSES,
          PAGE_MAIN_CONTENT_WIDTH_CLASSES
        )}>
      </PageMainContentWrapper>
    </PageLayoutWrapper>
  );
};

export default Home;
