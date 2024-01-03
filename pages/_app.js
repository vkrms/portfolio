import '../styles/globals.scss'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200..700&display=swap" rel="stylesheet" /> */}

      {/* <!-- Google tag (gtag.js) --> */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-FVEQZ41RC6" />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FVEQZ41RC6');`}
      </Script>

      {/* everything else */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
