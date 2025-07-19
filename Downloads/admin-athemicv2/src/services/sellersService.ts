import axios from 'axios'

const API_URL = 'https://mercapp-seller-production.up.railway.app/api'

export const sellersService = {
  create: (data: any) => axios.post(`${API_URL}/sellers`, data),
  getMe: ({ token }: { token: string }) => axios.get(`${API_URL}/sellers/me`, { headers: { Authorization: `Bearer ${token}` } }),
  updateMe: (data: any) => axios.put(`${API_URL}/sellers/me`, data),
  getById: (id: string) => axios.get(`${API_URL}/sellers/${id}`),
} 