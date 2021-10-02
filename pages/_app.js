import '../styles/globals.css'
import { RestfulProvider } from "restful-react";

function MyApp({ Component, pageProps }) {

  return (
    <RestfulProvider base="http://localhost:3001/api">
  <Component {...pageProps} />
  </RestfulProvider>
  )

}

export default MyApp
