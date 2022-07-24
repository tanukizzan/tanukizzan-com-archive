import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { googleTagManagerId } from '../libs/gtm';
import GoogleTagManager, {
  GoogleTagManagerId,
} from '../components/GoogleTagManager';
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
