import type { AppProps } from 'next/app'
import { ContainerStyleBody, globalStyles } from '../styles/global'
import Header from '../components/header'
import Footer from '../components/footer'
import { SorteiosContextProvider } from '../contexts/SorteiosContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SorteiosContextProvider>
      <Header />
      <ContainerStyleBody>
        <Component {...pageProps} />
      </ContainerStyleBody>

      <Footer />
    </SorteiosContextProvider>
  )
}
