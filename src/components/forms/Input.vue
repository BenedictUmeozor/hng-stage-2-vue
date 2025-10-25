<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface InputProps {
  id: string
  label: string
  type?: string
  modelValue: string
  error?: string
  required?: boolean
}

defineProps<InputProps>()
defineEmits<{
  'update:modelValue': [value: string]
  blur: []
}>()
</script>

<template>
  <div class="w-full">
    <label :for="id" class="mb-1 block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type || 'text'"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @blur="$emit('blur')"
      :class="[
        'w-full rounded-lg border px-4 py-2 transition outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500',
        error ? 'border-red-500' : 'border-gray-300'
      ]"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${id}-error` : undefined"
      :required="required"
    />
    <p v-if="error" :id="`${id}-error`" class="mt-1 text-sm text-red-600">
      {{ error }}
    </p>
  </div>
</template>
