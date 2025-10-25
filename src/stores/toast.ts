import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ToastType } from '@/types'

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<ToastType[]>([])

  function showToast(type: ToastType['type'], message: string) {
    const id = Date.now().toString()
    const newToast: ToastType = { id, type, message }
    toasts.value.push(newToast)

    setTimeout(() => {
      removeToast(id)
    }, 4000)
  }

  function removeToast(id: string) {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  return { toasts, showToast, removeToast }
})
