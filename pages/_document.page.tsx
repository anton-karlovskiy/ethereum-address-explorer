import Document, { DocumentContext } from 'next/document';
import {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
