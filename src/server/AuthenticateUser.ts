import { compare } from 'bcryptjs'
import { sign, verify } from 'jsonwebtoken'
import { prisma } from './prisma/prisma'

interface GerarTokenJwtProps {
  email: string
  password: string
}

interface VerificarTokenJwtProps {
  authToken: string
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
      throw new Error('User or password incorrect')
    }

    // verificar se a senha está correta
    const passwordMatch = await compare(password, userAlreadyExists.password)

    if (!passwordMatch) {
      throw new Error('User or password incorrect')
    }

    // Gerar token do user
    const token = sign({}, process.env.JWT_SECRET_KEY, {
      subject: userAlreadyExists.id,
      expiresIn: '30m',
    })

    return { token }
  }

  async verificarTokenJwt({ authToken }: VerificarTokenJwtProps) {
    const [, token] = authToken.split(' ')

    try {
      verify(token, process.env.JWT_SECRET_KEY)

      return { tokenIsValid: true, status: 'ok', message: 'token is valid' }
    } catch (err) {
      return {
        tokenIsValid: false,
        status: 'error',
        message: 'token not valid',
      }
    }
  }
}
