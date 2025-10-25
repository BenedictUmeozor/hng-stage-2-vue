<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  modelValue: string
  label: string
  id?: string
  error?: string
  options: SelectOption[]
}

defineProps<SelectProps>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="w-full">
    <label :for="id" class="mb-1 block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <select
      :id="id"
      :value="modelValue"
      @change="handleChange"
      :class="[
        'w-full rounded-lg border px-4 py-2 outline-none transition',
        'focus:border-transparent focus:ring-2 focus:ring-blue-500',
        error ? 'border-red-500' : 'border-gray-300'
      ]"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${id}-error` : undefined"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <p v-if="error" :id="`${id}-error`" class="mt-1 text-sm text-red-600">
      {{ error }}
    </p>
  </div>
</template>
