import Image from 'next/image'
import logo from '../../assets/img/logo.svg'
import { ContainerFooter } from './styles'

export default function Footer() {
  return (
    <ContainerFooter>
      <Image src={logo} width={145} height={35} alt="" />
      <p>copyright 2022</p>
      <p>alkjdf</p>
    </ContainerFooter>
  )
}
