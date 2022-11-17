import type { AppProps } from 'next/app'
import { ContainerStyleBody, globalStyles } from '../styles/global'
import Header from '../components/header'
// import Footer from '../components/footer'
// import { SorteiosContextProvider } from '../contexts/SorteiosContext'
import { MenuNavigationProvider } from '../contexts/MenuNavigation'
import { AuthProvider } from '../contexts/AuthContext'
// import { useContext } from 'react'
// import NavBar from '../components/navbar'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  // const { activeNavBar } = useContext(ToggleMenuContext)
  // console.log(activeNavBar)

  return (
    // <SorteiosContextProvider>
    <AuthProvider>
      <MenuNavigationProvider>
        <Header />
        <ContainerStyleBody>
          <Component {...pageProps} />
        </ContainerStyleBody>

        {/* <Footer /> */}
      </MenuNavigationProvider>
    </AuthProvider>
    // </SorteiosContextProvider>
  )
}
