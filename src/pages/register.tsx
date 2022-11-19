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
  name: string
  phone_number: string
  email: string
  password: string
}

export default function Register() {
  const { activeNavBar } = useContext(ToggleMenuContext)
  const { register, handleSubmit } = useForm()
  const { isAuthenticated, signIn } = useContext(AuthContext)

  console.log(isAuthenticated)

  function handleCreateUser({ email, password, name, phone_number }: SignProps) {
    signIn({ email, password })
  }

  if (activeNavBar) {
    return <NavBar></NavBar>
  }

  return (
    <ContainerRegister>
      <h1>⚡ Cadastro</h1>
      <div>
        <ContainerFormRegister onSubmit={handleSubmit(handleCreateUser)}>
          <label>
            <p>Nome:</p>
            <input {...register('name')} type="text" placeholder="Digite o seu email" />
          </label>
          <label>
            <p>Telefone:</p>
            <input {...register('phone_number')} type="phone" placeholder="Digite a sua senha" />
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
              type="passwordrifasbr"
              placeholder="Digite a sua senha"
            />
          </label>
          <label>
            <p>Confirme sua senha:</p>
            <input type="passwordrifasbr" placeholder="Digite a sua senha" />
          </label>

          <button type="submit">Cadastrar</button>
        </ContainerFormRegister>
      </div>
    </ContainerRegister>
  )
}
