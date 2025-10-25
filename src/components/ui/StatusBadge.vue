<script setup lang="ts">
import type { Ticket } from '@/types'

interface StatusBadgeProps {
  status: Ticket['status']
}

defineProps<StatusBadgeProps>()

const statusConfig = {
  open: {
    label: 'Open',
    classes: 'text-green-700 bg-green-50 border-green-200'
  },
  in_progress: {
    label: 'In Progress',
    classes: 'text-amber-700 bg-amber-50 border-amber-200'
  },
  closed: {
    label: 'Closed',
    classes: 'text-gray-700 bg-gray-50 border-gray-200'
  }
}
</script>

<template>
  <span
    :class="[
      'inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium',
      statusConfig[status].classes
    ]"
  >
    {{ statusConfig[status].label }}
  </span>
</template>
