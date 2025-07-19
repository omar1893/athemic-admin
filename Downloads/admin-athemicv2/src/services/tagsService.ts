import axios from 'axios'

const API_URL = 'https://mercapp-seller-production.up.railway.app/api'

export const tagsService = {
  create: (data: any) => axios.post(`${API_URL}/tags`, data),
  getAll: () => axios.get(`${API_URL}/tags`),
} 