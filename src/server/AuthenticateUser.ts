import { compare } from 'bcryptjs'
import { sign, verify } from 'jsonwebtoken'
import { prisma } from './prisma/prisma'

interface GerarTokenJwtProps {
  email: string
  password: string
}

interface VerificarTokenJwtProps {
  token: string
}

export class AuthenticateUserUseCase {
  async gerarTokenJwt({ email, password }: GerarTokenJwtProps) {
    // verificar se user existe
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email,
      },
    })

    if (!userAlreadyExists) {
      // throw new Error('User or password incorrect')
      return {
        status: 'error',
        message: 'Usuário não cadastrado, verifique seu email!',
      }
    }

    // verificar se a senha está correta
    const passwordMatch = await compare(password, userAlreadyExists.password)

    if (!passwordMatch) {
      // throw new Error('User or password incorrect')
      return {
        status: 'error',
        message: 'Senha incorreta, verifique sua senha!',
      }
    }

    // Gerar token do user
    const token = sign({}, process.env.JWT_SECRET_KEY, {
      subject: userAlreadyExists.id,
      expiresIn: '2h',
    })

    const { name, id } = userAlreadyExists

    return { status: 'success', token, user: { email, name, id } }
  }

  async verificarTokenJwt({ token }: VerificarTokenJwtProps) {
    // const [, token] = authToken.split(' ')

    try {
      const payloadToken = verify(token, process.env.JWT_SECRET_KEY)
      // console.log(id)
      const idUser: string =
        typeof payloadToken.sub === 'string' ? payloadToken.sub : 'idInvalid'

      const user = await prisma.user.findFirst({
        where: { id: idUser },
      })

      const userInfoLogged = {
        name: user.name,
        email: user.email,
        id: user.id,
      }

      return {
        tokenIsValid: true,
        // status: 'success',
        // message: 'token is valid',
        user: userInfoLogged,
      }
    } catch (err) {
      console.log(err)

      return {
        tokenIsValid: false,
        // status: 'error',
        // message: 'token not valid',
      }
    }
  }
}
