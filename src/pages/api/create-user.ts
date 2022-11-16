import { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcryptjs'
import { prisma } from '../../server/prisma/prisma'

export default async function sd(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.json({ error: 'Method not supported' })
  }
  const { name, email, password, phoneNumber } = req.body

  // verificar se usuário já existe
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

  const passwordHash = await hash(password, 8)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: passwordHash,
      phone_number: phoneNumber,
    },
  })

  res.status(201).json(user)

  // try {
  //   const user = await prisma.user.create({
  //     data: {
  //       name,
  //       email,
  //       senha,
  //       telefone,
  //     },
  //   })

  //   console.log(user)

  //   res.status(201).json(user)
  // } catch (err) {
  //   // console.log(err)
  //   // const errorTelefoneJaCadastrado = err.message.includes('telefone')

  //   // if (errorTelefoneJaCadastrado) {
  //   //   res.status(400).json({ error: 'esse número telefone já está cadastrado' })
  //   // }

  //   // const errorEmailJaCadastrado = err.message.includes('email')

  //   // if (errorEmailJaCadastrado) {
  //   //   res.status(400).json({ error: 'esse e-mail já está cadastrado' })
  //   // }

  //   res.status(500).json({ error: err.message })
  // }
}
