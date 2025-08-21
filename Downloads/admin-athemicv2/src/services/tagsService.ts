import axios from 'axios'
import config from '../config'

export const tagsService = {
  create: (data: any) => axios.post(`${config.API_URL}/tags`, data),
  getAll: () => axios.get(`${config.API_URL}/tags`),
} 