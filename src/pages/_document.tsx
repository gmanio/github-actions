import Document, { DocumentContext, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal();
    }
  }

  render (): JSX.Element {
    return (
      <html>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Source+Code+Pro:400,700" rel="stylesheet"/>
        <meta name="google-signin-client_id" content="328243791628-t7635a16s44jptmj023e1ntf6auq0q5u.apps.googleusercontent.com"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      <script src="https://apis.google.com/js/platform.js?onload=init" async defer/>
      </body>
      </html>
    )
  }
}
