import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { ToggleMenuContext } from '../../contexts/MenuNavigation'
import { apiBrowser } from '../../lib/axios/api'
import { ContainerBarraDeNavegacao } from './styles'

export default function NavBar() {
  const { setActiveNavBar } = useContext(ToggleMenuContext)
  const { isAuthenticated } = useContext(AuthContext)

  async function handleTeste() {
    await apiBrowser.get('/api/rotateste')
  }

  return (
    <ContainerBarraDeNavegacao>
      <ul>
        <Link href={'/'}>
          <li onClick={() => setActiveNavBar(false)}>Inicio</li>
        </Link>
        <Link href={'/'}>
          <li onClick={() => setActiveNavBar(false)}>Sorteios</li>
        </Link>
        <Link href={'/'}>
          <li onClick={() => setActiveNavBar(false)}>Ganhadores</li>
        </Link>

        <li onClick={() => handleTeste()}>testes</li>

        {/* <Link href={'/'}>
          <li onClick={() => setActiveNavBar(false)}>Sorteios</li>
        </Link>

        <Link href={'/'}>
          <li onClick={() => setActiveNavBar(false)}>Ganhadores</li>
        </Link> */}

        {isAuthenticated ? (
          <Link href={'/'}>
            <li onClick={() => setActiveNavBar(false)}>Minhas Cotas</li>
          </Link>
        ) : (
          <>
            <Link href={'/login'}>
              <li onClick={() => setActiveNavBar(false)}>Login</li>
            </Link>
            <Link href={'/register'}>
              <li onClick={() => setActiveNavBar(false)}>Cadastrar</li>
            </Link>
          </>
        )}
      </ul>
    </ContainerBarraDeNavegacao>
  )
}
