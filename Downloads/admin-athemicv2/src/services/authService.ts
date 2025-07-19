import axios from 'axios'

import config from '@/config';

export const authService = {
  loginWithEmail: (email) => axios.post(`${config.API_URL}/auth/login/request`, { email }),
  confirmLogin: (email, code) => axios.post(`${config.API_URL}/auth/login/confirm`, { email, code }),
  loginWithGoogle: (idToken) => axios.post(`${config.API_URL}/auth/login/google`, { id_token: idToken }),
} 