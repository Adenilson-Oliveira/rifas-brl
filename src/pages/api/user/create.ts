import { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcryptjs'
import { prisma } from '../../../server/prisma/prisma'
import { sign } from 'jsonwebtoken'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.json({ error: 'Method not supported' })
  }
  const { name, email, password, phoneNumber } = req.body

  // verificar se usuário já existe  -------------
  const userAlreadyExists = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  if (userAlreadyExists) {
    // throw new Error('User already exists!')
    res.status(400).json({
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
      phone_number: phoneNumber,
    },
  })

  const userFilteredInfo = {
    name: user.name,
    email: user.email,
    id: user.id,
  }

  const tokenJwtUser = sign({}, process.env.JWT_SECRET_KEY, {
    subject: userAlreadyExists.id,
    expiresIn: '2h',
  })

  res.status(201).json({
    user: userFilteredInfo,
    token: tokenJwtUser,
  })
}
