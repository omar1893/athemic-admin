import axios from 'axios'
import config from '../config'

export const productsService = {
  create: (data: any, config?: any) => axios.post(`${config.API_URL}/productos`, data, config),
  getAll: (params?: any, headers?: any) => axios.get(`${config.API_URL}/productos`, { params, headers }),
  getById: (id: string, config?: any) => axios.get(`${config.API_URL}/productos/${id}`, config),
  update: (id: string, data: any, config?: any) => axios.patch(`${config.API_URL}/productos/${id}`, data, config),
  getBestSellers: () => axios.get(`${config.API_URL}/productos/mas-vendidos`),
  addInteraction: (data: any) => axios.post(`${config.API_URL}/productos/interaction`, data),
  incrementCart: (id: string) => axios.post(`${config.API_URL}/productos/${id}/carrito`),
} 