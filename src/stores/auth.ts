import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@/types'
import { saveSession, getSession, clearSession } from '@/lib/auth'
import { mockLogin, mockSignup } from '@/lib/mockAuth'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const loading = ref(true)

  async function login(email: string, password: string) {
    const result = await mockLogin(email, password)
    saveSession(result.token, result.user)
    isAuthenticated.value = true
    user.value = result.user
    token.value = result.token
  }

  async function signup(name: string, email: string, password: string) {
    const result = await mockSignup(name, email, password)
    saveSession(result.token, result.user)
    isAuthenticated.value = true
    user.value = result.user
    token.value = result.token
  }

  function logout() {
    clearSession()
    isAuthenticated.value = false
    user.value = null
    token.value = null
  }

  function restoreSession() {
    const session = getSession()
    if (session) {
      isAuthenticated.value = true
      user.value = session.user
      token.value = session.token
    }
    loading.value = false
  }

  return { isAuthenticated, user, token, loading, login, signup, logout, restoreSession }
})
