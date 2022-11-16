import { NextApiRequest, NextApiResponse } from 'next'
// import { AuthenticateUserUseCase } from '../../server/AuthenticateUser'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req)

  return res.status(200).json([
    { id: 1, name: 'blusa' },
    { id: 2, name: 'ana' },
    { id: 3, name: 'calça' },
    { id: 4, name: 'maçã' },
    { id: 5, name: 'tenis' },
    { id: 16, name: 'aviao' },
  ])
  // const authenticateUser = new AuthenticateUserUseCase()
  // const token = req.headers.authorization

  // const userIsAuthenticate = await authenticateUser.verificarTokenJwt({
  //   authToken: token,
  // })

  // if (userIsAuthenticate.tokenIsValid) {
  // return res.status(200).json([
  //   { id: 1, name: 'blusa' },
  //   { id: 2, name: 'ana' },
  //   { id: 3, name: 'calça' },
  //   { id: 4, name: 'maçã' },
  //   { id: 5, name: 'tenis' },
  //   { id: 16, name: 'aviao' },
  // ])
  // }

  // if (!userIsAuthenticate.tokenIsValid) {
  //   return res.json({
  //     userIsAuthenticate,
  //   })
  // }
}
