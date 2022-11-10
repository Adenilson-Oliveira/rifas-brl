import type { AppProps } from 'next/app'
import { ContainerStyleBody, globalStyles } from '../styles/global'
import Header from '../components/header'
import Footer from '../components/footer'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <ContainerStyleBody>
        <Component {...pageProps} />
      </ContainerStyleBody>

      <Footer />
    </>
  )
}
