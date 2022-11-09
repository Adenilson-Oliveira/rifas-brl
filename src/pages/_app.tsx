import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import Header from '../components/header'
import Footer from '../components/footer'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
