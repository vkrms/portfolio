import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200..700&display=swap" rel="stylesheet" /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
