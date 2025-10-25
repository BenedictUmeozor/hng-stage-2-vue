<script setup lang="ts">
import type { FeatureCardProps } from '@/types'

defineProps<FeatureCardProps>()
</script>

<template>
  <div
    class="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl"
  >
    <div class="mb-4 text-blue-500">
      <component :is="icon" :size="48" />
    </div>
    <h3 class="mb-2 text-xl font-semibold text-gray-900">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>
