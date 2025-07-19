import axios from 'axios'

const API_URL = 'https://mercapp-seller-production.up.railway.app/api'

export const searchService = {
  search: (params?: any) => axios.get(`${API_URL}/busqueda`, { params }),
} 