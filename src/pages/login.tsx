import { ContainerFormLogin, ContainerLogin } from '../styles/pages/login'

export default function Login() {
  return (
    <ContainerLogin>
      <h1>⚡ Login</h1>
      <div>
        <ContainerFormLogin>
          <label>
            <p>E-mail:</p>
            <input type="text" placeholder="Digite o seu email" />
          </label>
          <label>
            <p>Senha:</p>
            <input type="password" placeholder="Digite a sua senha" />
          </label>

          <button type="submit">Entrar</button>
        </ContainerFormLogin>
      </div>
    </ContainerLogin>
  )
}
