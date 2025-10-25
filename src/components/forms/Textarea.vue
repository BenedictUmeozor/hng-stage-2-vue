<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface TextareaProps {
  modelValue: string
  label: string
  id?: string
  error?: string
  rows?: number
  placeholder?: string
}

defineProps<TextareaProps>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="w-full">
    <label :for="id" class="mb-1 block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <textarea
      :id="id"
      :value="modelValue"
      @input="handleInput"
      :rows="rows || 4"
      :placeholder="placeholder"
      :class="[
        'w-full resize-vertical rounded-lg border px-4 py-2 outline-none transition',
        'focus:border-transparent focus:ring-2 focus:ring-blue-500',
        error ? 'border-red-500' : 'border-gray-300'
      ]"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${id}-error` : undefined"
    />
    <p v-if="error" :id="`${id}-error`" class="mt-1 text-sm text-red-600">
      {{ error }}
    </p>
  </div>
</template>
