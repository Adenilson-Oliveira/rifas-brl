import { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { prisma } from '../../../server/prisma/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.json({ error: 'Method not supported' })
  }
  const { name, email, password, phone_number } = req.body

  // verificar se usuário já existe  -------------
  const userAlreadyExists = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  console.log(req.body)

  if (userAlreadyExists) {
    // throw new Error('User already exists!')
    return res.status(400).json({
      status: 'error',
      message: 'Esse email já está cadastrado.',
    })
  }

  // gerar hash do password ------------
  const passwordHash = await hash(password, 8)

  // insert user into database --------------
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: passwordHash,
      phone_number
    },
  })

  const userFilteredInfo = {
    name: user.name,
    email: user.email,
    id: user.id,
  }

  const tokenJwtUser = sign({}, process.env.JWT_SECRET_KEY, {
    subject: user.id,
    expiresIn: '2h',
  })

  return res.status(201).json({
    status: 'success',
    user: userFilteredInfo,
    token: tokenJwtUser,
  })
}
