import axios from 'axios'
import { parseCookies } from 'nookies'

export const api = axios.create({
  baseURL: process.env.APP_BASE_URL,
})

// api.defaults.headers['Access-Control-Allow-Credentials'] = true
// api.defaults.headers['Access-Control-Allow-Origin'] = '*'
// api.defaults.headers['Access-Control-Allow-Methods'] = 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
// api.defaults.headers['Access-Control-Allow-Headers'] = 'X-CSRF-Token, Cookies, X-Request-with, Accept, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
// api.defaults.headers['Content-Type'] = 'Aplication/json'

const { 'rifas-br-v1.token': token } = parseCookies()
// console.log(token)
if (token) {
  api.defaults.headers.Authorization = `Bearer ${token}`
}


// api.interceptors.request.use((config) => {
//   console.log(config)
//   return config
// })
