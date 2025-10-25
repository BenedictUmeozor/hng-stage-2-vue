<script setup lang="ts">
import type { StatCardProps } from '@/types'

defineProps<StatCardProps>()
</script>

<template>
  <div
    class="flex flex-col rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
  >
    <div :class="colorClass" class="mb-3">
      <component :is="icon" :size="32" />
    </div>
    <p class="text-sm font-medium text-gray-600">{{ label }}</p>
    <p class="mt-1 text-3xl font-bold text-gray-900">{{ count }}</p>
  </div>
</template>
