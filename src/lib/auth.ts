import type { User } from '@/types'

const SESSION_KEY = 'ticketapp_session'

interface Session {
  token: string
  user: User
}

export const saveSession = (token: string, user: User): void => {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ token, user }))
}

export const getSession = (): Session | null => {
  const str = localStorage.getItem(SESSION_KEY)
  if (!str) return null
  try {
    return JSON.parse(str)
  } catch {
    return null
  }
}

export const clearSession = (): void => {
  localStorage.removeItem(SESSION_KEY)
}
