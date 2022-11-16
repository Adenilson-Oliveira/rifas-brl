import { useContext } from 'react'
import NavBar from '../components/navbar'
import { ToggleMenuContext } from '../contexts/MenuNavigation'
import {
  ContainerFormRegister,
  ContainerRegister,
} from '../styles/pages/register'

import { useForm } from 'react-hook-form'
import { AuthContext } from '../contexts/AuthContext'

interface SignProps {
  email: string
  password: string
}

export default function Register() {
  const { activeNavBar } = useContext(ToggleMenuContext)
  const { register, handleSubmit } = useForm()
  const { isAuthenticated, signIn } = useContext(AuthContext)

  console.log(isAuthenticated)

  function handleSignIn(data: SignProps) {
    console.log(data)
    const { email, password } = data
    signIn({ email, password })
  }

  if (activeNavBar) {
    return <NavBar></NavBar>
  }

  return (
    <ContainerRegister>
      <h1>⚡ Cadastro</h1>
      <div>
        <ContainerFormRegister onSubmit={handleSubmit(handleSignIn)}>
          <label>
            <p>Nome:</p>
            <input type="text" placeholder="Digite o seu email" />
          </label>
          <label>
            <p>Telefone:</p>
            <input type="phone" placeholder="Digite a sua senha" />
          </label>
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
              type="password"
              placeholder="Digite a sua senha"
            />
          </label>
          <label>
            <p>Confirme sua senha:</p>
            <input type="password" placeholder="Digite a sua senha" />
          </label>

          <button type="submit">Cadastrar</button>
        </ContainerFormRegister>
      </div>
    </ContainerRegister>
  )
}
