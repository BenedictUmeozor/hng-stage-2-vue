<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import DecorativeCircle from '@/components/decorative/DecorativeCircle.vue'
import WavyBackground from '@/components/decorative/WavyBackground.vue'
import FeatureCard from '@/components/cards/FeatureCard.vue'
import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header.vue'
import { Shield, Ticket, Zap } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <!-- Hero Section -->
    <section
      class="relative overflow-hidden bg-linear-to-br from-blue-50 to-indigo-100 pt-20 pb-32"
    >
      <DecorativeCircle
        class="absolute -top-12 -right-12 opacity-50"
        size="xl"
        color="bg-blue-300"
      />
      <div class="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="mb-6 text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl">
            Welcome to <span class="text-blue-600">TicketFlow</span>
          </h1>
          <p class="mb-8 text-xl text-gray-700 sm:text-2xl">
            Streamline your ticket management with powerful tools and intuitive workflows
          </p>
          <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <RouterLink
              to="/auth/login"
              class="rounded-lg border-2 border-blue-600 bg-white px-8 py-3 text-lg font-semibold text-blue-600 transition-colors hover:bg-blue-50"
            >
              Login
            </RouterLink>
            <RouterLink
              to="/auth/signup"
              class="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Get Started
            </RouterLink>
          </div>
        </div>
      </div>
      <WavyBackground />
    </section>

    <!-- Features Section -->
    <section class="relative py-20">
      <DecorativeCircle
        class="absolute bottom-10 -left-20 opacity-30"
        size="lg"
        color="bg-indigo-200"
      />
      <div class="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <h2 class="mb-12 text-center text-4xl font-bold text-gray-900">
          Why Choose TicketFlow?
        </h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            :icon="Ticket"
            title="Easy Ticket Management"
            description="Create, update, and track tickets with an intuitive interface designed for efficiency."
          />
          <FeatureCard
            :icon="Zap"
            title="Lightning Fast"
            description="Built with modern technologies for optimal performance and seamless user experience."
          />
          <FeatureCard
            :icon="Shield"
            title="Secure & Reliable"
            description="Your data is protected with industry-standard security measures and best practices."
          />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
