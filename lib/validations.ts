import { z } from 'zod'

const terms = z.any().refine(terms => terms, 'Будь ласка, погодьтеся на обробку персональних даних, щоб відправити повідомлення.')

export const contactSchema = z.object({
  name: z.string().min(1, { message: "Поле ім’я є обов’язковим." }),
  email: z.string().email({ message: 'Введіть коректну пошту.' }),
  message: z.string().min(1, { message: "Поле повідомлення є обов’язковим." }),
  terms
})

export const careerSchema = z.object({
  name: z.string().min(1, { message: "Поле ім’я є обов’язковим." }),
  email: z.string().email({ message: 'Введіть коректну пошту.' }),
  phone: z.string().min(10, { message: 'Введіть коректний номер телефону.' }).optional().or(z.literal('')),
  resume: z.any()
    .refine(file => file?.size <= 5000000, 'PDF файл не повинен бути більше ніж 5 MB.')
    .refine(file => file?.type === 'application/pdf', "Підтримується тільки .pdf формат."),
  terms
})
