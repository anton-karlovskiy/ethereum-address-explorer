import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  useErrorHandler,
  withErrorBoundary
} from 'react-error-boundary';
import clsx from 'clsx';

import PortfolioHeader from './PortfolioHeader';
import PortfolioForm from './PortfolioForm';
import PortfolioTable from './PortfolioTable';
import ErrorFallback from 'components/ErrorFallback';
import { PORTFOLIO_API_URL_PREFIX } from 'config/links';
import { Token } from 'types/tokens';
import type { VercelAPIResponse } from 'types/general.d';

const PortfolioUI = () => {
  const [ethereumAccountAddress, setEthereumAccountAddress] = React.useState<string>();

  const portfolioApiUrl = `${PORTFOLIO_API_URL_PREFIX}/${ethereumAccountAddress}`;

  const {
    data,
    error,
    isInitialLoading,
    isRefetching,
    fetchStatus
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
    },
    {
      enabled: !!ethereumAccountAddress
    }
  );
  useErrorHandler(error);

  return (
    <div
      className={clsx(
        'space-y-6'
      )}>
      <PortfolioForm
        setEthereumAccountAddress={setEthereumAccountAddress}
        isInitialLoading={isInitialLoading} />
      {/* TODO: improve readability by composing with render functions */}
      <>
        {isInitialLoading ? (
          // TODO: display a skeleton UI to avoid layout shifting
          // TODO: display a loading spinner at least
          <div>Loading...</div>
        ) : (
          <>
            {data && ethereumAccountAddress ? (
              <>
                <PortfolioHeader
                  totalValueInUSD={data.totalValueInUSD}
                  ethereumAccountAddress={ethereumAccountAddress} />
                <PortfolioTable
                  tokens={data.tokens}
                  totalValueInUSD={data.totalValueInUSD} />
              </>
            ) : (
              fetchStatus === 'idle' && (
                <p>
                  Please submit an Ethereum account address on which you want to see its portfolio.
                </p>
              )
            )}
            {isRefetching && (
              <p className='text-sm'>
                Background updating...
              </p>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default withErrorBoundary(PortfolioUI, {
  FallbackComponent: ErrorFallback,
  onReset: () => {
    window.location.reload();
  }
});
