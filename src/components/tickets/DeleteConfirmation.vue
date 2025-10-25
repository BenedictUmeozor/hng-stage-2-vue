<script setup lang="ts">
import Modal from '@/components/ui/Modal.vue'
import Button from '@/components/forms/Button.vue'

interface DeleteConfirmationProps {
  isOpen: boolean
  ticketTitle: string
}

defineProps<DeleteConfirmationProps>()
const emit = defineEmits<{
  confirm: []
  cancel: []
}>()
</script>

<template>
  <Modal :is-open="isOpen" @close="emit('cancel')" title="Confirm Deletion">
    <p class="mb-6 text-gray-700">
      Are you sure you want to delete <strong>"{{ ticketTitle }}"</strong>? This action cannot be
      undone.
    </p>
    <div class="flex justify-end gap-3">
      <Button variant="secondary" @click="emit('cancel')"> Cancel </Button>
      <Button variant="danger" @click="emit('confirm')"> Delete Ticket </Button>
    </div>
  </Modal>
</template>
