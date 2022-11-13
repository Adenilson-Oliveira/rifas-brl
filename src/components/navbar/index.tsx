import Link from 'next/link'
import { useContext } from 'react'
import { ToggleMenuContext } from '../../contexts/MenuNavigation'
import { ContainerBarraDeNavegacao } from './styles'

export default function NavBar() {
  const { setActiveNavBar } = useContext(ToggleMenuContext)
  return (
    <ContainerBarraDeNavegacao>
      <ul>
        <Link href={'/'}>
          <li onClick={() => setActiveNavBar(false)}>Inicio</li>
        </Link>

        <Link href={'/checkout'}>
          <li onClick={() => setActiveNavBar(false)}>Sorteios</li>
        </Link>

        <Link href={'/product/1'}>
          <li onClick={() => setActiveNavBar(false)}>Contemplados</li>
        </Link>

        <Link href={'/login'}>
          <li onClick={() => setActiveNavBar(false)}>Login</li>
        </Link>

        <Link href={'/register'}>
          <li onClick={() => setActiveNavBar(false)}>Cadastrar</li>
        </Link>
      </ul>
    </ContainerBarraDeNavegacao>
  )
}
