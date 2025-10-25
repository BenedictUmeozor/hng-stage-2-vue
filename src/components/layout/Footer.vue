<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="w-full border-t border-gray-200 bg-gray-50">
    <div class="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p class="text-sm text-gray-600">
          © {{ currentYear }} TicketFlow. All rights reserved.
        </p>
        <div class="flex gap-6">
          <a href="#" class="text-sm text-gray-600 hover:text-blue-600"> Privacy Policy </a>
          <a href="#" class="text-sm text-gray-600 hover:text-blue-600"> Terms of Service </a>
        </div>
      </div>
    </div>
  </footer>
</template>
