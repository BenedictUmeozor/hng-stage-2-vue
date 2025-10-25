<script setup lang="ts">
import { useForm } from '@/composables/useForm'
import { validateTicketForm } from '@/lib/validation'
import type { Ticket, TicketFormData } from '@/types'
import Input from '@/components/forms/Input.vue'
import Textarea from '@/components/forms/Textarea.vue'
import Select from '@/components/forms/Select.vue'
import Button from '@/components/forms/Button.vue'

interface TicketFormProps {
  initialData?: Ticket
  mode: 'create' | 'edit'
}

const props = defineProps<TicketFormProps>()
const emit = defineEmits<{
  submit: [data: Omit<Ticket, 'id' | 'createdAt'>]
  cancel: []
}>()

const statusOptions = [
  { value: 'open', label: 'Open' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'closed', label: 'Closed'}
]

const priorityOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' }
]

const initialValues = props.initialData
  ? {
      title: props.initialData.title,
      description: props.initialData.description,
      status: props.initialData.status,
      priority: props.initialData.priority
    }
  : {
      title: '',
      description: '',
      status: 'open',
      priority: 'medium'
    }

const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useForm({
  initialValues,
  validate: (values) => validateTicketForm(values as TicketFormData),
  onSubmit: async (values) => {
    const ticketData = values as TicketFormData
    emit('submit', {
      title: ticketData.title,
      description: ticketData.description,
      status: ticketData.status as Ticket['status'],
      priority: ticketData.priority as Ticket['priority']
    })
  }
})
</script>

<template>
  <form @submit="handleSubmit" class="space-y-4">
    <Input
      id="title"
      v-model="values.title"
      type="text"
      label="Title"
      @blur="handleBlur('title')"
      @update:model-value="handleChange('title', $event)"
      :error="touched.title ? errors.title : undefined"
      required
    />

    <Textarea
      id="description"
      v-model="values.description"
      label="Description"
      :rows="4"
      @blur="handleBlur('description')"
      @update:model-value="handleChange('description', $event)"
      :error="touched.description ? errors.description : undefined"
    />

    <Select
      id="status"
      v-model="values.status"
      label="Status"
      :options="statusOptions"
      @blur="handleBlur('status')"
      @update:model-value="handleChange('status', $event)"
      :error="touched.status ? errors.status : undefined"
      required
    />

    <Select
      id="priority"
      v-model="values.priority"
      label="Priority"
      :options="priorityOptions"
      @blur="handleBlur('priority')"
      @update:model-value="handleChange('priority', $event)"
      :error="touched.priority ? errors.priority : undefined"
      required
    />

    <div class="flex justify-end gap-2">
      <Button type="button" variant="secondary" @click="emit('cancel')">
        Cancel
      </Button>
      <Button type="submit" variant="primary" :is-loading="isSubmitting">
        {{ mode === 'create' ? 'Create Ticket' : 'Update Ticket' }}
      </Button>
    </div>
  </form>
</template>
