import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="favicon.svg" />
        <meta
          name="description"
          content="Procure por filmes e séries para assistir"
        />
        <meta name="image" content="favicon.svg" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
