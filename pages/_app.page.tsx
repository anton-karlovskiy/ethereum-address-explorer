import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from 'parts/Layout';
import { ReactQueryProvider } from 'providers/react-query-context';
import { WagmiProvider } from 'providers/wagmi-context';
import 'styles/globals.css';
import 'components/UI/CustomTable/super-responsive-table-style.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>PulseX Protocol</title>
      </Head>
      <ReactQueryProvider>
        <WagmiProvider>
          <Layout className='font-inter'>
            <Component {...pageProps} />
          </Layout>
        </WagmiProvider>
      </ReactQueryProvider>
    </>
  );
};

export default MyApp;
