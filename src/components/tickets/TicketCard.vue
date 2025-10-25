<script setup lang="ts">
import type { Ticket } from '@/types'
import { Pencil, Trash2 } from 'lucide-vue-next'
import StatusBadge from '@/components/ui/StatusBadge.vue'

interface TicketCardProps {
  ticket: Ticket
}

defineProps<TicketCardProps>()
const emit = defineEmits<{
  edit: [ticket: Ticket]
  delete: [id: string]
}>()

const priorityConfig = {
  low: {
    label: 'Low',
    classes: 'text-blue-700 bg-blue-50 border-blue-200'
  },
  medium: {
    label: 'Medium',
    classes: 'text-yellow-700 bg-yellow-50 border-yellow-200'
  },
  high: {
    label: 'High',
    classes: 'text-red-700 bg-red-50 border-red-200'
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="flex flex-col rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
    <!-- Header -->
    <div class="mb-3 flex items-start justify-between">
      <h3 class="mr-2 flex-1 text-lg font-semibold text-gray-900">
        {{ ticket.title }}
      </h3>
      <div class="flex gap-2">
        <button
          @click="emit('edit', ticket)"
          :aria-label="`Edit ticket: ${ticket.title}`"
          class="text-blue-600 transition-colors hover:text-blue-800"
        >
          <Pencil :size="18" />
        </button>
        <button
          @click="emit('delete', ticket.id)"
          :aria-label="`Delete ticket: ${ticket.title}`"
          class="text-red-600 transition-colors hover:text-red-800"
        >
          <Trash2 :size="18" />
        </button>
      </div>
    </div>

    <!-- Badges -->
    <div class="mb-3 flex gap-2">
      <StatusBadge :status="ticket.status" />
      <span
        :class="[
          'inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium',
          priorityConfig[ticket.priority].classes
        ]"
      >
        {{ priorityConfig[ticket.priority].label }}
      </span>
    </div>

    <!-- Description -->
    <p v-if="ticket.description" class="mb-4 line-clamp-3 text-sm text-gray-600">
      {{ ticket.description }}
    </p>

    <!-- Footer -->
    <p class="mt-auto text-xs text-gray-500">Created: {{ formatDate(ticket.createdAt) }}</p>
  </div>
</template>
