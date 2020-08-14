const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { requireAuth: true },
    component: () => import('@/views/Profile.vue'),
  },
]

export default routes
