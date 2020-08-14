import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// guard routes
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['auth/isLoggedIn']
  const requireAuth = to.matched.some((record) => record.meta.requireAuth)

  if (requireAuth && !isLoggedIn) {
    next({ name: 'login' })
  } else if ((to.path == '/login' || to.path == '/register') && isLoggedIn) {
    next({ name: 'profile' })
  } else {
    next()
  }
})

export default router
