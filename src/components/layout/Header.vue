<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const { isAuthenticated } = storeToRefs(authStore)

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<template>
  <header class="w-full border-b border-gray-200 bg-white">
    <div
      class="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
    >
      <RouterLink to="/" class="text-xl font-bold text-blue-600 sm:text-2xl">
        TicketFlow
      </RouterLink>
      <nav class="flex items-center gap-2 sm:gap-4">
        <template v-if="isAuthenticated">
          <RouterLink
            to="/dashboard"
            class="rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 sm:px-4 sm:text-base"
          >
            Dashboard
          </RouterLink>
          <button
            @click="handleLogout"
            class="rounded-md border border-blue-600 px-3 py-2 text-sm text-blue-600 transition-colors hover:bg-blue-50 sm:px-4 sm:text-base"
          >
            Logout
          </button>
        </template>
        <template v-else>
          <RouterLink
            to="/auth/login"
            class="rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 sm:px-4 sm:text-base"
          >
            Login
          </RouterLink>
          <RouterLink
            to="/auth/signup"
            class="rounded-md bg-blue-600 px-3 py-2 text-sm text-white transition-colors hover:bg-blue-700 sm:px-4 sm:text-base"
          >
            Get Started
          </RouterLink>
        </template>
      </nav>
    </div>
  </header>
</template>
