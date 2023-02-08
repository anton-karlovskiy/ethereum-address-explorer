import clsx from 'clsx';

import CustomExternalLink from 'components/UI/CustomExternalLink';
import { ETHERSCAN_URL_PREFIX } from 'config/links';
import { usdFormatInstance } from 'utils/helpers/format';
import { ETHEREUM_ADDRESS } from 'utils/constants/general';

interface Props {
  totalValueInUSD: number;
}

const PortfolioHeader = ({
  totalValueInUSD
}: Props) => {
  const totalValueInUSDLabel = `Total (USD): ${usdFormatInstance.format(totalValueInUSD)}`;

  const etherscanLink = `${ETHERSCAN_URL_PREFIX}/address/${ETHEREUM_ADDRESS}#tokentxns`;

  return (
    <div
      className={clsx(
        'flex',
        'items-center',
        'justify-between'
      )}>
      <h2
        className={clsx(
          'md:text-lg'
        )}>
        {totalValueInUSDLabel}
      </h2>
      <CustomExternalLink
        className='text-sm'
        href={etherscanLink}>
        View on Etherscan
      </CustomExternalLink>
    </div>
  );
};

export default PortfolioHeader;
