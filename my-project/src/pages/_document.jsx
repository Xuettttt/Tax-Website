import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  const pageProps = props.__NEXT_DATA__.props.pageProps;

  return (
    <Html lang={pageProps.lang} className="h-full bg-white scroll-smooth">
      <Head>
        <meta name="description" content={pageProps.description} />
        <meta name="keywords" content={pageProps.keywords} />
        <meta name="author" content={pageProps.author} />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}