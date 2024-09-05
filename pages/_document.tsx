import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Next.js Dashboard website." />
        <meta property="og:title" content="Dashboard" />
        <meta property="og:description" content="Next.js Dashboard website." />
        <meta
          property="og:url"
          content="https://aissa-dev1-next-dashboard.netlify.app"
        />
        <meta property="og:site_name" content="Dashboard" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
