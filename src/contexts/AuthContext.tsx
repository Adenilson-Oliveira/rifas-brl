import { useRouter } from 'next/router'
import { setCookie, parseCookies } from 'nookies'
import { createContext, useEffect, useState } from 'react'
import { apiBrowser } from '../lib/axios/api'

type User = {
  id: string
  name: string
  email: string
}

type DataPost = {
  status: string
  token?: string
  message?: string
  user?: User
}

type SignInData = {
  email: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  signIn: (data: SignInData) => void
  user: User
  setUser: (a: any) => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  // const [isAuthenticated, setIsAuthenticate] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user
  const router = useRouter()

  useEffect(() => {
    // verificar se já existe algum cookie, ver se está válido e setar a estado isAuthenticated e o estado do user
    const { 'rifas-br-v1.token': token } = parseCookies()

    if (token) {
      // fazer req para rota auth-user passando token

      // no video o diego fernandes fez utilizando uma promise.
      // Obs: ficar atento pois quando eu fiz desse jeito tive que mudar a compilação para es 2016
      async function verificarToken() {
        const res = await apiBrowser.post('/api/auth-user', {
          token,
        })

        const tokenIsValid = res.data.tokenIsValid

        const setUserState = res.data.user || null
        setUser(setUserState)

        if (!tokenIsValid) {
          router.push('/login')
        }
        // return res
        // formato do retorno se o token for valido
        //   {
        //     "tokenIsValid": true,
        //     "status": "success",
        //     "message": "token is valid",
        //     "user": {
        //         "name": "user",
        //         "email": "teste1@teste.com",
        //         "id": "1859e026-9ca3-4bb3-b030-afd56610414c"
        //     }
        //    }
      }
      verificarToken()
      // const res = verificarToken()
    }

    console.log('teste')
  }, [router])

  async function signIn({ email, password }: SignInData) {
    const response = await apiBrowser.post('/api/auth-user', {
      email,
      password,
    })

    const data: DataPost = response.data

    if (data.status === 'success') {
      setCookie(undefined, 'rifas-br-v1.token', data.token, {
        maxAge: 60 * 60 * 2, // 2hours
      })

      apiBrowser.defaults.headers.Authorization = 'Bearer ' + data.token

      setUser(data.user)

      router.push('/')

      return {
        status: 'success',
        message: 'login concluido',
      }
    }

    if (data.status === 'error') {
      return {
        status: 'error',
        message: data.message,
      }
    }

    console.log(response.data)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
