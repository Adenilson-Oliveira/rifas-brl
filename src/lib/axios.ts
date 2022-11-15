import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.APP_BASE_URL,
})
