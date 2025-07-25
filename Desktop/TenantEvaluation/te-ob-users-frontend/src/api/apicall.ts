import axios from 'axios';
import config from '@/config';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

const authStore = useAuthStore();

const instance = axios.create({
  baseURL: config.apiUrl,
});

// instance.defaults.withCredentials = true;
instance.defaults.headers.common['Content-Type'] = 'application/json';

instance.interceptors.request.use(
  (interceptorConfig) => {
    const Config = interceptorConfig;
    Config.headers.Authorization = `Bearer ${authStore.token || null}`;
    return Config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use((response) => response, (error) => {
  if (error?.response?.status === 401) {
    router.push({ name: 'Logout' });
  }
  return Promise.reject(error);
});

const get = (path: string, params: any) => new Promise((resolve, reject) => {
  instance.get(path, {
    params: { ...params },
  })
    .then((response) => resolve(response))
    .catch((err) => reject(err));
});

const post = (path: string, body: any, timeout = 0) => new Promise((resolve, reject) => {
  instance.post(path, { ...body }, { timeout })
    .then((response) => resolve(response))
    .catch((err) => reject(err));
});

const postFormData = (path: string, body: { [x: string]: string | Blob; }) => new Promise((resolve, reject) => {
  const formData = new FormData();
  Object.keys(body).forEach((e) => {
    formData.append(e, body[e]);
  });

  instance.post(path, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    .then((response) => resolve(response))
    .catch((err) => reject(err));
});

const put = (path: string, body: any) => new Promise((resolve, reject) => {
  instance.put(path, { ...body })
    .then((response) => resolve(response))
    .catch((err) => reject(err));
});

const del = (path: string, params: any) => new Promise((resolve, reject) => {
  instance.delete(path, {
    params: { ...params },
  })
    .then((response) => resolve(response))
    .catch((err) => reject(err));
});

export default {
  get,
  post,
  postFormData,
  put,
  del,
  delete: del,
  axios: instance,
};
