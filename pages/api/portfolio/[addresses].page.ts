import {
  NextApiRequest,
  NextApiResponse
} from 'next';
import {
  Network,
  Alchemy,
  TokenBalance
} from 'alchemy-sdk';
import { HashZero } from '@ethersproject/constants';
import { formatUnits } from '@ethersproject/units';

import { getErrorMessage } from 'utils/helpers/error-handling';
import { Token } from 'types/tokens';

const CACHE_TIME = 1800;
const COIN_GECKO_API_URL = 'https://api.coingecko.com/api/v3/';
const alchemySettings = {
  apiKey: process.env.ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET // Replace with your network.
};
const ETH_DECIMALS = 18;

// RE:
// - https://docs.alchemy.com/reference/sdk-gettokenbalances
// - https://docs.alchemy.com/docs/how-to-get-all-tokens-owned-by-an-address
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const addresses = (req.query.addresses as string).split(',');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
      res.setHeader(
        'Access-Control-Allow-Methods',
        'PUT, POST, PATCH, DELETE, GET'
      );
      return res.status(200).json({});
    }

    const alchemy = new Alchemy(alchemySettings);

    const [balancesSet, ethBalanceInBigNumber, { ethereum }] =
      await Promise.all([
        Promise.all(
          addresses.map(async item => {
            return await alchemy.core.getTokenBalances(item);
          })
        ),
        alchemy.core.getBalance(addresses[0]),
        fetch(
          `${COIN_GECKO_API_URL}simple/price?ids=ethereum&vs_currencies=USD`
        ).then(async response => await response.json())
      ]);

    let totalBalances: Array<TokenBalance> = [];
    for (const item of balancesSet) {
      totalBalances = [...totalBalances, ...item.tokenBalances];
    }
    const nonZeroTokenBalances = totalBalances.filter((token: TokenBalance) => {
      return token.tokenBalance !== HashZero;
    });

    // RE: https://docs.ethers.io/v5/api/utils/bignumber/#BigNumber--notes-safenumbers
    const ethBalanceInNumber = Number(
      formatUnits(ethBalanceInBigNumber, ETH_DECIMALS)
    );

    const ethToken: Token = {
      address: 'eth',
      amount: ethBalanceInNumber,
      logo: 'https://token-icons.s3.amazonaws.com/eth.png',
      name: 'Ethereum',
      unitPriceInUSD: ethereum.usd,
      symbol: 'ETH',
      decimals: ETH_DECIMALS,
      valueInUSD: ethBalanceInNumber * ethereum.usd
    };

    const tokensAddresses = nonZeroTokenBalances.map(
      (token: TokenBalance) => token.contractAddress
    );
    const tokenUSDPricesResponse = await fetch(
      // eslint-disable-next-line max-len
      `${COIN_GECKO_API_URL}simple/token_price/ethereum?contract_addresses=${tokensAddresses.toString()}&vs_currencies=USD`
    );
    const tokenUSDUnitPrices = await tokenUSDPricesResponse.json(); // TODO: type it

    const withPriceNonZeroBalances = nonZeroTokenBalances.filter(
      (token: TokenBalance) => {
        return tokenUSDUnitPrices[token.contractAddress]?.usd;
      }
    );

    const metadataSet = await Promise.all(
      withPriceNonZeroBalances.map(item =>
        alchemy.core.getTokenMetadata(item.contractAddress)
      )
    );

    let totalValueInUSD = 0;
    const erc20Tokens: Array<Token> = [];
    withPriceNonZeroBalances.forEach((item, index) => {
      const balanceInString = item.tokenBalance;

      const balanceInNumber = balanceInString ?
        Number(
          formatUnits(balanceInString, metadataSet[index].decimals || 18)
        ) :
        0;

      const erc20Token: Token = {
        address: item.contractAddress,
        amount: balanceInNumber,
        name: metadataSet[index].name ?? '',
        symbol: metadataSet[index].symbol ?? '',
        decimals: metadataSet[index].decimals ?? 18, // TODO: double-check it
        logo: metadataSet[index].logo ?? '',
        unitPriceInUSD: tokenUSDUnitPrices[item.contractAddress].usd,
        valueInUSD: balanceInNumber * tokenUSDUnitPrices[item.contractAddress].usd
      };

      erc20Tokens.push(erc20Token);
      totalValueInUSD += erc20Token.valueInUSD;
    });

    totalValueInUSD += ethToken.valueInUSD;
    const tokens = [...erc20Tokens, ethToken];

    res.setHeader(
      'Cache-Control',
      `s-maxage=${CACHE_TIME}, stale-while-revalidate=${2 * CACHE_TIME}`
    );
    res.json({
      success: true,
      statusCode: 200,
      result: { totalValueInUSD, tokens }
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, message: getErrorMessage(error) });
  }
};

export default handler;
