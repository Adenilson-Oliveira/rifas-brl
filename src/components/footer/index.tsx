import Image from 'next/image'
import logo from '../../assets/img/logo.svg'
import { ContainerFooter } from './styles'

export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <ContainerFooter>
      <div>
        <Image src={logo} width={145} height={35} alt="" />
        <p>Copyright © {ano}</p>
      </div>

      <div className="RefKaizen">
        <p>
          built by
          <span> Kaizen Solutions</span>
        </p>
      </div>
    </ContainerFooter>
  )
}
