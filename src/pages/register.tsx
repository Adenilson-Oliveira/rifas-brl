import {
  ContainerFormRegister,
  ContainerRegister,
} from '../styles/pages/register'

export default function Register() {
  return (
    <ContainerRegister>
      <h1>⚡ Cadastro</h1>
      <div>
        <ContainerFormRegister>
          <label>
            <p>Nome:</p>
            <input type="text" placeholder="Digite o seu email" />
          </label>
          <label>
            <p>Telefone:</p>
            <input type="password" placeholder="Digite a sua senha" />
          </label>
          <label>
            <p>E-mail:</p>
            <input type="text" placeholder="Digite o seu email" />
          </label>
          <label>
            <p>Senha:</p>
            <input type="password" placeholder="Digite a sua senha" />
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
