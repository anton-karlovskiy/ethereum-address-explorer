import dynamic from 'next/dynamic';
import { Theme, lightTheme } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';

import { TOKEN_CONTRACT_ADDRESS, PRIMARY_COLOR } from 'config/launch';

// RE: https://github.com/Uniswap/widgets/issues/374
// RE: https://github.com/Uniswap/widgets/issues/404#issue-1533436974
const DynamicSwapWidget = dynamic(
  async () => {
    // RE: https://docs.uniswap.org/sdk/swap-widget/guides/getting-started
    // RE: https://github.com/Uniswap/widgets/issues/404#issuecomment-1464566737
    const res = await import('@uniswap/widgets');
    return res.SwapWidget;
  },
  { ssr: false }
);

const myLightTheme: Theme = {
  ...lightTheme, // Extend the lightTheme
  accent: PRIMARY_COLOR,
  primary: '#000000',
  // secondary: SECONDARY_COLOR,
  container: '#fff',
  module: '#f0f0f0',
  borderRadius: 4,
  fontFamily: 'Inter',
  tokenColorExtraction: true
};

// Use the native token of the connected chain as the default input token
const NATIVE = 'NATIVE'; // Special address for native token

const UniswapMechanism = () => {
  return (
    <DynamicSwapWidget
      width={400}
      className='border border-[#e5e7eb] !rounded-[6px]'
      theme={myLightTheme}
      defaultInputTokenAddress={NATIVE}
      defaultInputAmount={0.25}
      defaultOutputTokenAddress={TOKEN_CONTRACT_ADDRESS} />
  );
};

export default UniswapMechanism;
