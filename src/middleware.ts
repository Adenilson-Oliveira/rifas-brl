// export async function middleware(req) {
//   console.log('Ola middleware')
// }
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // if (request.nextUrl.pathname.startsWith('/register')) {
  //   return NextResponse.rewrite(new URL('/login', request.url))
  // }

  if (req.nextUrl.pathname.startsWith('/api/rotateste')) {
    // const authenticateUser = new AuthenticateUserUseCase()
    // const token = req.headers.get('authorization')

    // const userIsAuthenticate = await authenticateUser.verificarTokenJwt({
    //   authToken: token,
    // })

    const authToken = req.headers.get('authorization')

    console.log(authToken)

    if (!authToken) {
      return NextResponse.rewrite(new URL('/api/erro-jwt', req.url))
      // return NextResponse.rewrite('/api/login')
    }

    // verificar o token

    // redirecionar se o token estiver invalido
    return NextResponse.next()
  }
}
