import axios from 'axios'
import config from '../config'

export const sellersService = {
  create: (data: any) => axios.post(`${config.API_URL}/sellers`, data),
  getMe: ({ token }: { token: string }) => axios.get(`${config.API_URL}/sellers/me`, { headers: { Authorization: `Bearer ${token}` } }),
  updateMe: (data: any) => axios.put(`${config.API_URL}/sellers/me`, data),
  getById: (id: string) => axios.get(`${config.API_URL}/sellers/${id}`),
} 