<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRouter } from 'vue-router'
import AuthLayout from '@/components/layout/AuthLayout.vue'
import Input from '@/components/forms/Input.vue'
import Button from '@/components/forms/Button.vue'
import { useForm } from '@/composables/useForm'
import { useAuthStore } from '@/stores/auth'
import { useToastStore } from '@/stores/toast'
import { validateSignupForm } from '@/lib/validation'

const router = useRouter()
const authStore = useAuthStore()
const toastStore = useToastStore()

const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useForm({
  initialValues: { name: '', email: '', password: '', confirmPassword: '' },
  validate: validateSignupForm,
  onSubmit: async (values) => {
    try {
      await authStore.signup(values.name, values.email, values.password)
      toastStore.showToast('success', 'Account created successfully!')
      router.push('/dashboard')
    } catch (error) {
      toastStore.showToast('error', error instanceof Error ? error.message : 'Signup failed')
    }
  }
})
</script>

<template>
  <AuthLayout>
    <div class="rounded-lg bg-white p-8 shadow-lg">
      <h1 class="mb-6 text-center text-2xl font-bold">Join TicketFlow</h1>
      <form @submit="handleSubmit" class="space-y-4">
        <Input
          id="name"
          type="text"
          label="Full Name"
          :model-value="values.name"
          @update:model-value="(value) => handleChange('name', value)"
          @blur="() => handleBlur('name')"
          :error="touched.name ? errors.name : undefined"
          required
        />
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
        <Input
          id="confirmPassword"
          type="password"
          label="Confirm Password"
          :model-value="values.confirmPassword"
          @update:model-value="(value) => handleChange('confirmPassword', value)"
          @blur="() => handleBlur('confirmPassword')"
          :error="touched.confirmPassword ? errors.confirmPassword : undefined"
          required
        />
        <Button type="submit" :is-loading="isSubmitting" class="w-full"> Sign Up </Button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        Already have an account?
        <RouterLink to="/auth/login" class="text-blue-600 hover:underline"> Login </RouterLink>
      </p>
    </div>
  </AuthLayout>
</template>
