'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
})

export type ContactState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success?: boolean;
};

export async function sendContactEmail(prevState: ContactState, formData: FormData) {
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
  phone: z.string().min(10),
  resume: z.string().min(10),
})

export type CareerState = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    resume?: string[];
  };
  success?: boolean;
};

export async function sendCareerEmail(prevState: CareerState, formData: FormData) {
  const validatedFields = careerSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
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
