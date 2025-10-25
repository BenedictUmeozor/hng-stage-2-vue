<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { X } from 'lucide-vue-next'

interface ModalProps {
  isOpen: boolean
  title: string
}

const props = defineProps<ModalProps>()
const emit = defineEmits<{
  close: []
}>()

const dialogRef = ref<HTMLDivElement | null>(null)
const previousFocus = ref<HTMLElement | null>(null)

// Handle Escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

// Focus management
watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      // Store currently focused element
      previousFocus.value = document.activeElement as HTMLElement

      // Focus first focusable element in modal
      setTimeout(() => {
        const focusableElements = dialogRef.value?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusableElements && focusableElements.length > 0) {
          focusableElements[0]?.focus()
        }
      }, 100)
    } else {
      // Restore focus
      previousFocus.value?.focus()
    }
  }
)

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen">
        <!-- Backdrop -->
        <div
          class="fixed inset-0 z-40 bg-black/50"
          @click="emit('close')"
          aria-hidden="true"
        />

        <!-- Dialog container -->
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            ref="dialogRef"
            role="dialog"
            aria-modal="true"
            :aria-labelledby="`modal-title-${title}`"
            class="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-white shadow-xl"
            @click.stop
          >
            <!-- Header -->
            <div class="flex items-center justify-between border-b border-gray-200 p-6">
              <h2 :id="`modal-title-${title}`" class="text-xl font-semibold text-gray-900">
                {{ title }}
              </h2>
              <button
                @click="emit('close')"
                aria-label="Close modal"
                class="text-gray-400 transition-colors hover:text-gray-600"
              >
                <X :size="24" />
              </button>
            </div>

            <!-- Body -->
            <div class="p-6">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
