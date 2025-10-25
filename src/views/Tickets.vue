<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="mx-auto w-full max-w-[1440px] flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <h1 class="mb-4 text-3xl font-bold text-gray-900">Ticket Management</h1>
      <p class="text-gray-600">
        This page will be implemented in Feature 4 with full CRUD functionality.
      </p>
    </main>
    <Footer />
  </div>
</template>
