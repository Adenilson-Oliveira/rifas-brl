import Image from 'next/image'
import { List } from 'phosphor-react'
import { useContext } from 'react'
// import { createContext, useState } from 'react'
import logo from '../../assets/img/logo.svg'
import { ToggleMenuContext } from '../../contexts/MenuNavigation'
import { ContainerHeader, ContainerStyleBorder } from './styles'

export default function Header() {
  const { activeNavBar, setActiveNavBar } = useContext(ToggleMenuContext)
  // console.log(activeNavBar)
  return (
    <>
      <ContainerHeader>
        <Image src={logo} alt="" width={145} height={35} />
        <List onClick={() => setActiveNavBar(!activeNavBar)} />
        {/* <List /> */}
      </ContainerHeader>

      {/* <ContainerStyleBorder>
        <div></div>
      </ContainerStyleBorder> */}

      {!activeNavBar && (
        <ContainerStyleBorder>
          <div></div>
        </ContainerStyleBorder>
      )}
    </>
  )
}
