// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add Facebook Pixel script here */}
        <script
          async
          defer
          src="https://connect.facebook.net/en_US/fbevents.js"
        ></script>

        {/* Manifest and Favicon */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Fly Your Tech - Custom Tech Solutions"
        />
        <meta
          name="keywords"
          content="technology, custom solutions, web development, AI"
        />
        <meta property="og:title" content="Fly Your Tech" />
        <meta
          property="og:description"
          content="Custom solutions from web to AI."
        />
        <meta property="og:url" content="https://flyyourtech.com" />
        <meta property="og:image" content="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
