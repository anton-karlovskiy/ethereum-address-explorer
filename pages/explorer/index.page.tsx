import type { NextPage } from 'next';
import clsx from 'clsx';

import PageTitle from 'parts/PageTitle';
import PageLayoutWrapper from 'parts/PageLayoutWrapper';
import PageMainContentWrapper from 'parts/PageMainContentWrapper';
import Portfolio from 'components/demos/Portfolio';
import {
  LAYOUT_SIDE_PADDING_CLASSES,
  PAGE_MAIN_CONTENT_WIDTH_CLASSES
} from 'utils/constants/styles';

const Explorer: NextPage = () => {
  return (
    <PageLayoutWrapper>
      <PageMainContentWrapper
        className={clsx(
          'mx-auto',
          LAYOUT_SIDE_PADDING_CLASSES,
          PAGE_MAIN_CONTENT_WIDTH_CLASSES
        )}>
        <PageTitle>Explorer</PageTitle>
        <Portfolio />
      </PageMainContentWrapper>
    </PageLayoutWrapper>
  );
};

export default Explorer;
