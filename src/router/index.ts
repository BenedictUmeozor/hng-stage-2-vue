import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login.vue'
import Signup from '@/views/auth/Signup.vue'
import Dashboard from '@/views/Dashboard.vue'
import Tickets from '@/views/Tickets.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: Tickets,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // Restore session on first load
  if (authStore.loading) {
    authStore.restoreSession()
  }

  // Redirect to login if accessing protected route while not authenticated
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return next('/auth/login')
  }

  // Redirect to dashboard if accessing auth pages while authenticated
  if ((to.path === '/auth/login' || to.path === '/auth/signup') && authStore.isAuthenticated) {
    return next('/dashboard')
  }

  next()
})

export default router
