// pages/_app.js
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Fly Your Tech",
        "url": "https://flyyourtech.com",
        "logo": "https://flyyourtech.com/logo.png",
        "description": "Offering custom technology solutions from web to AI",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-555-5555",
          "contactType": "Customer Service"
        }
      }
    `}
        </script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
