<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// No auth yet - Feature #2 will add useAuth composable
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
      </nav>
    </div>
  </header>
</template>
