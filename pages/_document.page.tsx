import Document, { DocumentContext } from 'next/document';
import {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import clsx from 'clsx';

import { DARK_BACKGROUND_COLOR } from 'config/launch';

const META_DESCRIPTION =
  // eslint-disable-next-line max-len
  'Breaking down cross-chain barriers for seamless DeFi trading. Empowering traders with lightning-fast swaps at unbeatable rates and with AI trade helper.';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png' />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png' />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png' />
          <link
            rel='manifest'
            href='/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/safari-pinned-tab.svg' />
          <meta
            name='msapplication-TileColor'
            content='#da532c' />
          <meta
            name='theme-color'
            content='#ffffff' />
          <meta
            name='msapplication-config'
            content='/browserconfig.xml' />

          {/* Primary Meta Tags */}
          <meta
            name='title'
            content='Crosslink' />
          <meta
            name='description'
            content={META_DESCRIPTION} />

          {/* Open Graph / Facebook */}
          <meta
            property='og:type'
            content='website' />
          <meta
            property='og:url'
            content='https://xlinkprotocol.xyz' />
          <meta
            property='og:title'
            content='Crosslink' />
          <meta
            property='og:description'
            content={META_DESCRIPTION} />
          <meta
            property='og:image'
            content='https://app.xlinkprotocol.xyz/xlinkprotocol-meta-image.png' />
          <meta
            property='og:image:width'
            content='800' />
          <meta
            property='og:image:height'
            content='475' />

          {/* Twitter */}
          <meta
            property='twitter:card'
            content='summary_large_image' />
          <meta
            property='twitter:url'
            content='https://xlinkprotocol.xyz' />
          <meta
            property='twitter:title'
            content='Crosslink' />
          <meta
            property='twitter:description'
            content={META_DESCRIPTION} />
          <meta
            property='twitter:image'
            content='https://app.xlinkprotocol.xyz/xlinkprotocol-meta-image.png' />
          {/* MEMO: inspired by https://nextjs.org/docs/basic-features/font-optimization */}
          {/* MEMO: inspired by https://nextjs.org/docs/messages/google-font-display */}
          {/* EN */}
          {/* <link
            href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap'
            rel='stylesheet' /> */}
          {/* RU */}
          {/* <link
            href='https://fonts.googleapis.com/css2?family=Overpass:wght@400;500;600;700&display=swap'
            rel='stylesheet' /> */}
          {/* JA */}
          {/* <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap'
            rel='stylesheet' /> */}
          {/* ZH */}
          {/* <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&display=swap'
            rel='stylesheet' /> */}
        </Head>
        <body
          className={clsx(
            DARK_BACKGROUND_COLOR,
            'text-[#b2bac2]'
          )}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
