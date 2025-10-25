import { ref, type Ref } from 'vue'

interface UseFormOptions<T> {
  initialValues: T
  validate: (values: T) => Partial<Record<keyof T, string>>
  onSubmit: (values: T) => Promise<void>
}

export function useForm<T extends Record<string, string>>(options: UseFormOptions<T>) {
  const values = ref({ ...options.initialValues }) as Ref<T>
  const errors = ref<Partial<Record<keyof T, string>>>({})
  const touched = ref<Partial<Record<keyof T, boolean>>>({})
  const isSubmitting = ref(false)

  function handleChange(name: keyof T, value: string) {
    values.value[name] = value as T[keyof T]
    if (touched.value[name]) {
      errors.value = options.validate(values.value)
    }
  }

  function handleBlur(name: keyof T) {
    touched.value[name] = true
    errors.value = options.validate(values.value)
  }

  async function handleSubmit(e: Event) {
    e.preventDefault()
    const validationErrors = options.validate(values.value)
    errors.value = validationErrors

    if (Object.keys(validationErrors).length > 0) return

    isSubmitting.value = true
    try {
      await options.onSubmit(values.value)
    } finally {
      isSubmitting.value = false
    }
  }

  return { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }
}
