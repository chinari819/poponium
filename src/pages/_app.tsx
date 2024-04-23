import type { AppProps } from "next/app";
import "../app/globals.css";
import Head from "next/head";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chinari819" />
        <meta name="twitter:title" content="ポポニウム" />
        <meta name="twitter:description" content="ポポニウム" />
        <meta name="twitter:image" content="img/ieiri.jpg" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
