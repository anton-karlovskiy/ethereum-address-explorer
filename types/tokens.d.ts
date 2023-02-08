interface Token {
  address: string;
  amount: number;
  decimals: number;
  logo: string;
  name: string;
  unitPriceInUSD: number;
  symbol: string;
  valueInUSD: number;
}

export type { Token };
