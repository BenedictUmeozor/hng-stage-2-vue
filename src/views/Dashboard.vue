<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useTicketStore } from '@/stores/ticket'
import { Ticket, CircleDot, Clock, CheckCircle2 } from 'lucide-vue-next'
import StatCard from '@/components/cards/StatCard.vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

const authStore = useAuthStore()
const ticketStore = useTicketStore()
const { user } = storeToRefs(authStore)
const { totalTickets, openTickets, inProgressTickets, closedTickets } =
  storeToRefs(ticketStore)

onMounted(() => {
  ticketStore.loadTickets()
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <main class="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          Welcome back, {{ user?.name || 'User' }}!
        </h1>
        <p class="mt-2 text-base text-gray-600 sm:text-lg">
          Here is an overview of your ticket management system.
        </p>
      </div>

      <div class="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          :icon="Ticket"
          label="Total Tickets"
          :count="totalTickets"
          color-class="text-blue-600"
        />
        <StatCard
          :icon="CircleDot"
          label="Open Tickets"
          :count="openTickets"
          color-class="text-green-600"
        />
        <StatCard
          :icon="Clock"
          label="In Progress"
          :count="inProgressTickets"
          color-class="text-amber-600"
        />
        <StatCard
          :icon="CheckCircle2"
          label="Closed Tickets"
          :count="closedTickets"
          color-class="text-gray-600"
        />
      </div>

      <div class="flex justify-center">
        <router-link
          to="/tickets"
          class="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Manage Tickets
        </router-link>
      </div>
    </main>

    <Footer />
  </div>
</template>
