import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../server/prisma/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  const { email, password } = req.body

  if (!email || !password) {
    res.status(200).json({
      status: 'error',
      menubar: 'Dados inválidos'
    })
  }

  const userAlreadyExists = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  // Verificar se o user já tem cadastro para fazer login
  if (!userAlreadyExists) {
    return res.status(200).json({
      status: 'error',
      message: 'Usuário não cadastrado, verifique seu email!',
    })
  }

  // verificar se a senha está correta
  const passwordMatch = await compare(password, userAlreadyExists.password)

  if (!passwordMatch) {
    return res.status(200).json({
      status: 'error',
      message: 'Senha incorreta, verifique sua senha!',
    })
  }

  // Gerar token do user
  const token = sign({}, process.env.JWT_SECRET_KEY, {
    subject: userAlreadyExists.id,
    expiresIn: '2h',
  })

  const { name, id } = userAlreadyExists

  return res.status(200).json({ status: 'success', token, user: { email, name, id } })

}