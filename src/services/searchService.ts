import axios from 'axios'
import config from '../config'

export const searchService = {
  search: (params?: any) => axios.get(`${config.API_URL}/busqueda`, { params }),
} 