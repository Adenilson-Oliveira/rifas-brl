import { NextApiRequest, NextApiResponse } from 'next'
import { AuthenticateUserUseCase } from '../../server/AuthenticateUser'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  const authenticateUser = new AuthenticateUserUseCase()
  const { email, password, token } = req.body

  if (token) {
    const resultVerifyToken = await authenticateUser.verificarTokenJwt({
      token,
    })
    return res.status(200).json(resultVerifyToken)
  }

  try {
    const resultGenerateToken = await authenticateUser.gerarTokenJwt({
      email,
      password,
    })
    console.log(resultGenerateToken)
    if (resultGenerateToken.status === 'error') {
      return res.status(200).json(resultGenerateToken)
    }

    return res.status(201).json(resultGenerateToken)
  } catch (err) {
    console.log(err)

    return res.status(200).json({ err })
  }
}
