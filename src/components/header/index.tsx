import Image from 'next/image'
import { List } from 'phosphor-react'
import logo from '../../assets/img/logo.svg'
import { ContainerHeader, ContainerStyleBorder } from './styles'

export default function Header() {
  return (
    <>
      <ContainerHeader>
        <Image src={logo} alt="" width={145} height={35} />
        <List />
      </ContainerHeader>
      <ContainerStyleBorder>
        <div></div>
      </ContainerStyleBorder>
    </>
  )
}
