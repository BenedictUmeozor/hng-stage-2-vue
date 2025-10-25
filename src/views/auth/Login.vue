<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRouter } from 'vue-router'
import AuthLayout from '@/components/layout/AuthLayout.vue'
import Input from '@/components/forms/Input.vue'
import Button from '@/components/forms/Button.vue'
import { useForm } from '@/composables/useForm'
import { useAuthStore } from '@/stores/auth'
import { useToastStore } from '@/stores/toast'
import { validateLoginForm } from '@/lib/validation'

const router = useRouter()
const authStore = useAuthStore()
const toastStore = useToastStore()

const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useForm({
  initialValues: { email: '', password: '' },
  validate: validateLoginForm,
  onSubmit: async (values) => {
    try {
      await authStore.login(values.email, values.password)
      toastStore.showToast('success', 'Login successful!')
      router.push('/dashboard')
    } catch (error) {
      toastStore.showToast('error', error instanceof Error ? error.message : 'Login failed')
    }
  }
})
</script>

<template>
  <AuthLayout>
    <div class="rounded-lg bg-white p-8 shadow-lg">
      <h1 class="mb-6 text-center text-2xl font-bold">Login to TicketFlow</h1>
      <form @submit="handleSubmit" class="space-y-4">
        <Input
          id="email"
          type="email"
          label="Email"
          :model-value="values.email"
          @update:model-value="(value) => handleChange('email', value)"
          @blur="() => handleBlur('email')"
          :error="touched.email ? errors.email : undefined"
          required
        />
        <Input
          id="password"
          type="password"
          label="Password"
          :model-value="values.password"
          @update:model-value="(value) => handleChange('password', value)"
          @blur="() => handleBlur('password')"
          :error="touched.password ? errors.password : undefined"
          required
        />
        <Button type="submit" :is-loading="isSubmitting" class="w-full"> Login </Button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        Don't have an account?
        <RouterLink to="/auth/signup" class="text-blue-600 hover:underline"> Sign up </RouterLink>
      </p>
    </div>
  </AuthLayout>
</template>
