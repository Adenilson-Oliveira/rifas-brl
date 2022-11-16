import axios from 'axios'
import { parseCookies } from 'nookies'

export const api = axios.create({
  baseURL: process.env.APP_BASE_URL,
})

const { 'rifas-br-v1.token': token } = parseCookies()
if (token) {
  api.defaults.headers.Authorization = `Bearer ${token}`
}

// api.interceptors.request.use((config) => {
//   console.log(config)
//   return config
// })
