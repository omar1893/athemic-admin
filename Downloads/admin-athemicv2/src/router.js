import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: { name: 'login' } },
  { path: '/login', name: 'login', component: () => import('./views/LoginView.vue') },
  { path: '/pin-verification', name: 'pinVerification', component: () => import('./views/PinVerificationView.vue') },
  {
    path: '/',
    component: () => import('./views/DashboardLayout.vue'),
    children: [
      { path: 'home', name: 'home', component: () => import('./views/home.vue') },
      { path: 'orders', name: 'orders', component: () => import('./views/orders/index.vue') },
      { path: 'products', name: 'products', component: () => import('./views/products/index.vue') },
      { path: 'products/create', name: 'productCreate', component: () => import('./views/products/create.vue') },
      { path: 'products/:id/edit', name: 'productEdit', component: () => import('./views/products/create.vue'), props: true },
      { path: 'products/:id', name: 'productDetail', component: () => import('./views/products/detail.vue'), props: true },
      { path: 'tags/create', name: 'tagCreate', component: () => import('./views/CreateTagView.vue') },
      { path: 'stores', component: () => import('./views/stores/index.vue') },
      { path: 'staff', component: () => import('./views/staff/index.vue') },
      { path: 'delivery', component: () => import('./views/delivery/index.vue') },
      { path: 'users', component: () => import('./views/users/index.vue') },
      { path: 'analytics', component: () => import('./views/analytics/index.vue') },
      // { path: 'support', component: () => import('./views/support/index.vue') }, */
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 