import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return <>
    <link rel="preconnect" href="https://fonts.gstatic.com/" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />

    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      crossOrigin="anonymous"
    />
    <Component {...pageProps} />

  </>
}

export default MyApp
