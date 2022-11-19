import { verify } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import { AuthenticateUserUseCase } from '../../../server/AuthenticateUser'
import { prisma } from '../../../server/prisma/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  // const authenticateUser = new AuthenticateUserUseCase()
  const token = req.cookies['rifas-br-v1.token']

  if (token) {
    // const resultVerifyToken = await authenticateUser.verificarTokenJwt({
    //   token,
    // })
    // return res.status(200).json(resultVerifyToken)

    try {
      const payloadToken = verify(token, process.env.JWT_SECRET_KEY)
      console.log(payloadToken)

      const idUser: string =
        typeof payloadToken.sub === 'string' ? payloadToken.sub : 'idInvalid'

      if (idUser === 'idInvalid') {
        res.status(200).json({ tokenIsValid: false, })
      }

      const user = await prisma.user.findFirst({
        where: { id: idUser },
      })

      const userInfoLogged = {
        name: user.name,
        email: user.email,
        id: user.id,
      }

      return res.status(200).json({
        tokenIsValid: true,
        // status: 'success',
        // message: 'token is valid',
        user: userInfoLogged,
      })
    } catch (err) {
      // console.log(err)

      return res.status(200).json({
        tokenIsValid: false,
        // status: 'error',
        // message: 'token not valid',
      })
    }
  }


}