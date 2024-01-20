import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
})

export const careerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(10),
  resume: z.any()
    .refine((file) => file?.size <= 5000000, `PDF файл не повинен бути більше ніж 5MB.`)
    .refine(
      file => file?.type === 'application/pdf',
      "Підтримується тільки .pdf формат."
    )
})
