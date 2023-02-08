import {
  WagmiConfig,
  configureChains,
  createClient
} from 'wagmi';
import {
  optimism,
  mainnet,
  goerli,
  avalanche
} from 'wagmi/chains';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { infuraProvider } from 'wagmi/providers/infura';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

if (!process.env.NEXT_PUBLIC_ALCHEMY_API_KEY) {
  throw new Error('NEXT_PUBLIC_ALCHEMY_API_KEY is missing!');
}
if (!process.env.NEXT_PUBLIC_INFURA_API_KEY) {
  throw new Error('NEXT_PUBLIC_INFURA_API_KEY is missing!');
}

const {
  chains,
  provider,
  webSocketProvider
} = configureChains(
  [mainnet, goerli, optimism, avalanche],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY }),
    jsonRpcProvider({
      rpc: chain => {
        return {
          http: chain.rpcUrls.default.http[0]
        };
      }
    }),
    publicProvider()
  ],
  { targetQuorum: 1 }
);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        UNSTABLE_shimOnConnectSelectAccount: true
      }
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi'
      }
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true
      }
    }),
    new InjectedConnector({
      chains,
      options: {
        name: detectedName =>
          `Injected (${
            typeof detectedName === 'string' ?
              detectedName :
              detectedName.join(', ')
          })`,
        shimDisconnect: true
      }
    })
  ],
  provider,
  webSocketProvider
});

interface WagmiProviderProps {
  children: React.ReactNode;
}

const WagmiProvider = ({ children }: WagmiProviderProps) => {
  return (
    <WagmiConfig client={client}>
      {children}
    </WagmiConfig>
  );
};

export { WagmiProvider };
