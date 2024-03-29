import { useRouter } from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

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

type RegisterProps = {
  name: string
  password: string
  email: string
  phone_number: string
}

type AuthContextType = {
  isAuthenticated: boolean
  signIn: (data: SignInData) => any
  user: User
  setUser: (a: any) => void
  signOut: () => void
  registerUser: (a: RegisterProps) => any
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  // const [isAuthenticated, setIsAuthenticate] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user
  const router = useRouter()

  // verificar se já tem o token valido e atualizar a application com as info do user
  useEffect(() => {
    // verificar se já existe algum cookie, ver se está válido e setar a estado isAuthenticated e o estado do user
    const { 'rifas-br-v1.token': token } = parseCookies()

    if (token) {
      // fazer req para rota auth-user passando token

      // no video o diego fernandes fez utilizando uma promise.
      // Obs: ficar atento pois quando eu fiz desse jeito tive que mudar a compilação para es 2016
      async function verificarToken() {
        const res = await api.post('/api/auth/verify-token')

        const tokenIsValid = res.data.tokenIsValid

        const setUserState: User | null = res.data.user || null
        setUser(setUserState)

        if (!tokenIsValid) {
          destroyCookie(undefined, 'rifas-br-v1.token')
          router.push('/')
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

  // gerar o token para o user se suas credentials estiverem corretas
  async function signIn({ email, password }: SignInData) {
    const response = await api.post('/api/auth/login', {
      email,
      password,
    })

    const data: DataPost = response.data

    if (data.status === 'success') {
      setCookie(undefined, 'rifas-br-v1.token', data.token, {
        maxAge: 60 * 60 * 2, // 2hours
      })

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

  // destroy the cookie jwt and the session
  async function signOut() {

    destroyCookie(undefined, 'rifas-br-v1.token')
    setUser(null)
    router.push('/')
  }

  // realizar o registro/cadastro do user
  async function registerUser({ name, password, email, phone_number }: RegisterProps) {
    const response = await api.post('/api/user/create', {
      name,
      password,
      email,
      phone_number
    })

    const data = response.data

    if (data.status === 'error') {
      return {
        status: 'error',
        message: data.message
      }
    }

    if (data.status === 'success') {
      setCookie(undefined, 'rifas-br-v1.token', data.token, {
        maxAge: 60 * 60 * 2, // 2hours
      })
      setUser(data.user)

      router.push('/')

      return {
        status: 'success',
        message: 'Cadastro feito com sucesso!',
      }

    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user, setUser, signOut, registerUser }}>
      {children}
    </AuthContext.Provider>
  )
}
