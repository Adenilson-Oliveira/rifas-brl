import Link from 'next/link'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import NavBar from '../components/navbar'
import { AuthContext } from '../contexts/AuthContext'
import { ToggleMenuContext } from '../contexts/MenuNavigation'
import { ContainerFormLogin, ContainerLogin } from '../styles/pages/login'

export default function Login() {
  const { activeNavBar } = useContext(ToggleMenuContext)
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)

  async function handleLogin({ email, password }) {
    const result = await signIn({ email, password })
    console.log(result)
  }

  if (activeNavBar) {
    return <NavBar></NavBar>
  }
  return (
    <ContainerLogin>
      <h1>⚡ Login</h1>
      <p>faça login para concorrer aos prêmios</p>
      <div>
        <ContainerFormLogin onSubmit={handleSubmit(handleLogin)}>
          <label>
            <p>E-mail:</p>
            <input
              {...register('email')}
              type="text"
              placeholder="Digite o seu email"
            />
          </label>
          <label>
            <p>Senha:</p>
            <input
              {...register('password')}
              type="passwordrifasbr"
              placeholder="Digite a sua senha"
            />
          </label>
          <Link href="/register" >Ainda não possui cadastro, clique aqui.</Link>

          <button type="submit">Entrar</button>
        </ContainerFormLogin>
      </div>
    </ContainerLogin>
  )
}
