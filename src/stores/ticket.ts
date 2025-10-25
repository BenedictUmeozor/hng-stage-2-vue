import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import type { Ticket } from '@/types'
import {
  saveTickets as saveTicketsToStorage,
  loadTickets as loadTicketsFromStorage
} from '@/lib/ticketStorage'

const mockTickets: Ticket[] = [
  {
    id: '1',
    title: 'Fix login bug',
    description: 'Users cannot login with valid credentials',
    status: 'open',
    priority: 'high',
    createdAt: '2025-10-20T10:00:00Z'
  },
  {
    id: '2',
    title: 'Update homepage design',
    description: 'Refresh landing page with new branding',
    status: 'open',
    priority: 'medium',
    createdAt: '2025-10-21T14:30:00Z'
  },
  {
    id: '3',
    title: 'Add dark mode',
    description: 'Implement dark theme toggle',
    status: 'open',
    priority: 'low',
    createdAt: '2025-10-22T09:15:00Z'
  },
  {
    id: '4',
    title: 'Database optimization',
    description: 'Improve query performance',
    status: 'in_progress',
    priority: 'high',
    createdAt: '2025-10-19T08:00:00Z'
  },
  {
    id: '5',
    title: 'API documentation',
    description: 'Write comprehensive API docs',
    status: 'in_progress',
    priority: 'medium',
    createdAt: '2025-10-20T16:45:00Z'
  },
  {
    id: '6',
    title: 'Setup CI/CD pipeline',
    description: 'Automated testing and deployment',
    status: 'closed',
    priority: 'high',
    createdAt: '2025-10-18T11:20:00Z'
  },
  {
    id: '7',
    title: 'Email notifications',
    description: 'Send alerts for ticket updates',
    status: 'closed',
    priority: 'medium',
    createdAt: '2025-10-17T13:00:00Z'
  }
]

export const useTicketStore = defineStore('ticket', () => {
  const tickets = ref<Ticket[]>([])
  const loading = ref(false)

  const totalTickets = computed(() => tickets.value.length)
  const openTickets = computed(() => tickets.value.filter((t) => t.status === 'open').length)
  const inProgressTickets = computed(
    () => tickets.value.filter((t) => t.status === 'in_progress').length
  )
  const closedTickets = computed(() => tickets.value.filter((t) => t.status === 'closed').length)

  function loadTickets() {
    const stored = loadTicketsFromStorage()
    tickets.value = stored || mockTickets
  }

  function addTicket(ticket: Omit<Ticket, 'id' | 'createdAt'>) {
    const newTicket: Ticket = {
      ...ticket,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    }
    tickets.value.push(newTicket)
  }

  function updateTicket(ticket: Ticket) {
    const index = tickets.value.findIndex((t) => t.id === ticket.id)
    if (index !== -1) {
      tickets.value[index] = ticket
    }
  }

  function deleteTicket(id: string) {
    tickets.value = tickets.value.filter((t) => t.id !== id)
  }

  watch(
    tickets,
    (newTickets) => {
      saveTicketsToStorage(newTickets)
    },
    { deep: true }
  )

  return {
    tickets,
    loading,
    totalTickets,
    openTickets,
    inProgressTickets,
    closedTickets,
    loadTickets,
    addTicket,
    updateTicket,
    deleteTicket
  }
})
