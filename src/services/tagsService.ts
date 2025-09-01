import axios from 'axios'
import config from '../config'

export const tagsService = {
  create: (data: any, token: string) => axios.post(`${config.API_URL}/tags`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }),
  getAll: (token: string) => axios.get(`${config.API_URL}/tags`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }),
} 