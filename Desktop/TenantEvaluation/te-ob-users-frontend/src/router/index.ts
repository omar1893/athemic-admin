import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'users',
    component: () => import('@/views/Users/UsersView.vue'),
  },
  {
    path: '/create-user',
    name: 'create-user',
    component: () => import('@/views/CreateUser/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/ErrorNotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
