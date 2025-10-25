<script setup lang="ts">
import { useToastStore } from '@/stores/toast'
import { storeToRefs } from 'pinia'

const toastStore = useToastStore()
const { toasts } = storeToRefs(toastStore)

const getToastClasses = (type: string) => {
  const base = 'max-w-md min-w-[300px] rounded-lg px-4 py-3 shadow-lg'
  const types: Record<string, string> = {
    success: 'border-l-4 border-green-500 bg-green-50 text-green-900',
    error: 'border-l-4 border-red-500 bg-red-50 text-red-900',
    info: 'border-l-4 border-blue-500 bg-blue-50 text-blue-900',
    warning: 'border-l-4 border-yellow-500 bg-yellow-50 text-yellow-900'
  }
  return `${base} ${types[type] || ''}`
}
</script>

<template>
  <div class="fixed top-4 right-4 z-50 space-y-2">
    <div v-for="toast in toasts" :key="toast.id" :class="getToastClasses(toast.type)">
      <p class="text-sm font-medium">{{ toast.message }}</p>
    </div>
  </div>
</template>
