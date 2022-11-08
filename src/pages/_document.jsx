import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="bg-gray-900 antialiased" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=DM+Sans:wght@400;500;700&display=swap"
        />
        <script
          async
          src="https://cdn.volument.com/beta/volument.js"
          token="3715e2604b"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
