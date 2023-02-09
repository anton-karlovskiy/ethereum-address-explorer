import clsx from 'clsx';

import CustomTable, {
  CustomThead,
  CustomTh,
  CustomTd,
  CustomTr,
  CustomTbody
} from 'components/UI/CustomTable';
import {
  getNumberFormatInstance,
  usdFormatInstance
} from 'utils/helpers/format';
import { Token } from 'types/tokens';

const tokenAmountFormatInstance = getNumberFormatInstance(undefined, {
  maximumFractionDigits: 4,
  minimumFractionDigits: 4
});

const percentageFormatInstance = getNumberFormatInstance(undefined, {
  style: 'percent',
  maximumFractionDigits: 2
});

interface Props {
  tokens: Array<Token>;
  totalValueInUSD: number;
}

// TODO: display token logos
const PortfolioTable = ({
  tokens,
  totalValueInUSD
}: Props) => {
  return (
    <CustomTable className={clsx('table-fixed', 'w-full')}>
      <CustomThead>
        <CustomTr>
          <CustomTh>
            Symbol
            <span
              className={clsx('text-black/50', 'hidden', 'md:inline')}>
              ,&nbsp;Name
            </span>
          </CustomTh>
          <CustomTh className='md:text-center'>
            Amount
            <span
              className={clsx('text-black/50', 'hidden', 'md:inline')}>
              ,&nbsp;Percentage
            </span>
          </CustomTh>
          <CustomTh className='text-right'>
            USD
          </CustomTh>
        </CustomTr>
      </CustomThead>
      <CustomTbody>
        {tokens.map((item: Token, index) => {
          const tokenAmountLabel = tokenAmountFormatInstance.format(item.amount);

          const tokenValuePercentage = percentageFormatInstance.format(item.valueInUSD / totalValueInUSD);

          const tokenValueInUSDLabel = usdFormatInstance.format(item.valueInUSD);

          return (
            <CustomTr key={item.address + index}>
              <CustomTd>
                <span
                  className={clsx(
                    'text-black',
                    'block',
                    'text-right',
                    'md:inline'
                  )}>
                  {item.symbol}
                </span>
                <span
                  className={clsx(
                    'ml-5',
                    'text-black/50',
                    'hidden',
                    'md:inline'
                  )}>
                  {item.name}
                </span>
              </CustomTd>
              <CustomTd>
                <span
                  className={clsx(
                    'block',
                    'md:w-72',
                    'ml-auto',
                    'md:mx-auto',
                    'text-center'
                  )}>
                  <span
                    className={clsx(
                      'text-black',
                      'block',
                      'text-right',
                      'md:inline'
                    )}>
                    {tokenAmountLabel}
                    <span className={clsx('hidden', 'md:inline')}>
                      &nbsp;{item.symbol}
                    </span>
                  </span>
                  <span
                    className={clsx(
                      'ml-5',
                      'text-black/50',
                      'hidden',
                      'md:inline-block',
                      'w-12'
                    )}>
                    {tokenValuePercentage}
                  </span>
                </span>
              </CustomTd>
              <CustomTd>
                <span
                  className={clsx(
                    'block',
                    'text-right'
                  )}>
                  {tokenValueInUSDLabel}
                </span>
              </CustomTd>
            </CustomTr>
          );
        })}
      </CustomTbody>
    </CustomTable>
  );
};

export default PortfolioTable;
