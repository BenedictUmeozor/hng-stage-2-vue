import type { Component } from 'vue'

export interface DecorativeCircleProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  className?: string
}

export interface FeatureCardProps {
  icon: Component
  title: string
  description: string
}

export interface User {
  id: string
  name: string
  email: string
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
  token: string | null
  loading: boolean
}

export interface LoginFormData {
  email: string
  password: string
}

export interface SignupFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface ToastType {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
}

// Ticket Management Types
export interface Ticket {
  id: string
  title: string
  description: string
  status: 'open' | 'in_progress' | 'closed'
  priority: 'low' | 'medium' | 'high'
  createdAt: string
}

export interface StatCardProps {
  icon: Component
  label: string
  count: number
  colorClass: string
}
