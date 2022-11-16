import axios from 'axios'
import { parseCookies } from 'nookies'

export function getAPIClient(ctx?: any) {
  const { 'rifas-br-v1.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: process.env.APP_BASE_URL,
  })
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  api.interceptors.request.use((config) => {
    console.log(config)
    return config
  })

  return api
}
