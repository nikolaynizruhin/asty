'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function sendContactEmail(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  console.log(validatedFields)
  
  // send email
  // revalidate cache
  return { success: true }
}

const careerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function sendCareerEmail(prevState: any, formData: FormData) {
  const validatedFields = careerSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('phone'),
    resume: formData.get('resume'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  console.log(validatedFields)
  
  // send email
  // revalidate cache
  return { success: true }
}
