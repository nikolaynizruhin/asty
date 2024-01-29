import { z } from 'zod'

const terms = z.any().refine(terms => terms, 'Будь ласка, погодьтеся на обробку персональних даних, щоб відправити повідомлення.')

export const contactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
  terms
})

export const careerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(10),
  resume: z.any()
    .refine(file => file?.size <= 5000000, 'PDF файл не повинен бути більше ніж 5 MB.')
    .refine(file => file?.type === 'application/pdf', "Підтримується тільки .pdf формат."),
  terms
})
