import { createContext, useState } from 'react'
import { api } from '../lib/axios'

type SignInData = {
  email: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  signIn: (data: SignInData) => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  async function signIn({ email, password }: SignInData) {
    const response = await api.post('/api/login', {
      body: {
        email,
        password,
      },
    })

    console.log(response)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
