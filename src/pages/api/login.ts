import { NextApiRequest, NextApiResponse } from 'next'
import { AuthenticateUserUseCase } from '../../server/AuthenticateUser'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, password } = req.body

  const authenticateUser = new AuthenticateUserUseCase()

  const token = await authenticateUser.gerarTokenJwt({
    email,
    password,
  })

  res.status(201).json(token)
}
