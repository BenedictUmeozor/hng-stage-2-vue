<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger'
  isLoading?: boolean
  type?: ButtonHTMLAttributes['type']
  disabled?: boolean
  class?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  isLoading: false,
  type: 'button',
  disabled: false
})

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700'
}
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || isLoading"
    :class="[
      'px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
      variantClasses[variant],
      props.class
    ]"
  >
    <slot v-if="!isLoading" />
    <span v-else>Loading...</span>
  </button>
</template>
