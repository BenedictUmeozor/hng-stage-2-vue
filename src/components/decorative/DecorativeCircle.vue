<script setup lang="ts">
import type { DecorativeCircleProps } from '@/types'

const props = withDefaults(defineProps<DecorativeCircleProps>(), {
  size: 'md',
  color: 'bg-blue-200',
  className: '',
})

const sizeClasses = {
  sm: 'w-24 h-24',
  md: 'w-48 h-48',
  lg: 'w-64 h-64',
  xl: 'w-96 h-96',
}
</script>

<template>
  <div
    :class="['rounded-full', sizeClasses[props.size], props.color, props.className]"
    aria-hidden="true"
  />
</template>
