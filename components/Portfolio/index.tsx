import { useQuery } from '@tanstack/react-query';
import {
  useErrorHandler,
  withErrorBoundary
} from 'react-error-boundary';
import clsx from 'clsx';

import PortfolioHeader from './PortfolioHeader';
import ErrorFallback from 'components/ErrorFallback';
import { PORTFOLIO_API_URL_PREFIX } from 'config/links';
import { ETHEREUM_ADDRESS } from 'utils/constants/general';
import { Token } from 'types/tokens';
import type { VercelAPIResponse } from 'types/general.d';
import PortfolioTable from './PortfolioTable';

const portfolioApiUrl = `${PORTFOLIO_API_URL_PREFIX}/${ETHEREUM_ADDRESS}`;

const PortfolioUI = () => {
  const {
    data,
    error,
    isLoading
  } = useQuery(
    [portfolioApiUrl],
    async () => {
      const response = await fetch(portfolioApiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: VercelAPIResponse<{
        tokens: Array<Token>;
        totalValueInUSD: number;
      }> = await response.json();

      return data.result;
    }
  );
  useErrorHandler(error);

  // TODO: display skeleton UI to avoid layout shifting
  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }
  if (data === undefined) {
    throw new Error('Something went wrong!');
  }

  return (
    <div
      className={clsx(
        'space-y-4'
      )}>
      <PortfolioHeader totalValueInUSD={data.totalValueInUSD} />
      <PortfolioTable
        tokens={data.tokens}
        totalValueInUSD={data.totalValueInUSD} />
    </div>
  );
};

export default withErrorBoundary(PortfolioUI, {
  FallbackComponent: ErrorFallback,
  onReset: () => {
    window.location.reload();
  }
});
