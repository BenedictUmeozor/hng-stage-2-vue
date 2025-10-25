<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTicketStore } from '@/stores/ticket'
import { useToastStore } from '@/stores/toast'
import type { Ticket } from '@/types'
import { Plus } from 'lucide-vue-next'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Button from '@/components/forms/Button.vue'
import Modal from '@/components/ui/Modal.vue'
import TicketCard from '@/components/tickets/TicketCard.vue'
import TicketForm from '@/components/tickets/TicketForm.vue'
import DeleteConfirmation from '@/components/tickets/DeleteConfirmation.vue'

const ticketStore = useTicketStore()
const toastStore = useToastStore()
const { tickets } = storeToRefs(ticketStore)

const isCreateModalOpen = ref(false)
const editingTicket = ref<Ticket | null>(null)
const deletingTicketId = ref<string | null>(null)

// Create handlers
const handleCreateTicket = () => {
  isCreateModalOpen.value = true
}

const handleSubmitCreate = async (data: Omit<Ticket, 'id' | 'createdAt'>) => {
  try {
    ticketStore.addTicket(data)
    toastStore.showToast('success', 'Ticket created successfully')
    isCreateModalOpen.value = false
  } catch (error) {
    toastStore.showToast(
      'error',
      error instanceof Error ? error.message : 'Failed to create ticket'
    )
  }
}

const handleCancelCreate = () => {
  isCreateModalOpen.value = false
}

// Edit handlers
const handleEditTicket = (ticket: Ticket) => {
  editingTicket.value = ticket
}

const handleSubmitEdit = async (data: Omit<Ticket, 'id' | 'createdAt'>) => {
  if (!editingTicket.value) return

  try {
    ticketStore.updateTicket({
      ...data,
      id: editingTicket.value.id,
      createdAt: editingTicket.value.createdAt
    })
    toastStore.showToast('success', 'Ticket updated successfully')
    editingTicket.value = null
  } catch (error) {
    toastStore.showToast(
      'error',
      error instanceof Error ? error.message : 'Failed to update ticket'
    )
  }
}

const handleCancelEdit = () => {
  editingTicket.value = null
}

// Delete handlers
const handleDeleteClick = (id: string) => {
  deletingTicketId.value = id
}

const handleConfirmDelete = () => {
  if (!deletingTicketId.value) return

  try {
    ticketStore.deleteTicket(deletingTicketId.value)
    toastStore.showToast('success', 'Ticket deleted successfully')
    deletingTicketId.value = null
  } catch (error) {
    toastStore.showToast(
      'error',
      error instanceof Error ? error.message : 'Failed to delete ticket'
    )
  }
}

const handleCancelDelete = () => {
  deletingTicketId.value = null
}

// Sort tickets by newest first
const sortedTickets = computed(() => {
  return [...tickets.value].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
})

// Find deleting ticket for confirmation
const deletingTicket = computed(() => {
  return tickets.value.find((t) => t.id === deletingTicketId.value)
})

onMounted(() => {
  ticketStore.loadTickets()
})
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <div class="flex-1">
      <div class="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
        <!-- Header -->
        <div
          class="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
        >
          <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Ticket Management</h1>
          <Button class="w-full sm:w-auto" @click="handleCreateTicket">
            <Plus :size="20" class="mr-2 inline" />
            Create Ticket
          </Button>
        </div>

        <!-- Tickets Grid -->
        <div v-if="sortedTickets.length === 0" class="py-12 text-center">
          <p class="text-lg text-gray-500">No tickets yet. Create your first ticket!</p>
        </div>
        <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TicketCard
            v-for="ticket in sortedTickets"
            :key="ticket.id"
            :ticket="ticket"
            @edit="handleEditTicket"
            @delete="handleDeleteClick"
          />
        </div>

        <!-- Create Modal -->
        <Modal :is-open="isCreateModalOpen" @close="handleCancelCreate" title="Create New Ticket">
          <TicketForm mode="create" @submit="handleSubmitCreate" @cancel="handleCancelCreate" />
        </Modal>

        <!-- Edit Modal -->
        <Modal
          v-if="editingTicket"
          :is-open="true"
          @close="handleCancelEdit"
          title="Edit Ticket"
        >
          <TicketForm
            mode="edit"
            :initial-data="editingTicket"
            @submit="handleSubmitEdit"
            @cancel="handleCancelEdit"
          />
        </Modal>

        <!-- Delete Confirmation -->
        <DeleteConfirmation
          v-if="deletingTicket"
          :is-open="true"
          :ticket-title="deletingTicket.title"
          @confirm="handleConfirmDelete"
          @cancel="handleCancelDelete"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>
