'use server'

import { careerSchema, contactSchema } from "./validations";

export type ContactState = {
  errors: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function sendContactEmail(prevState: ContactState, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // send email
  console.log(validatedFields)

  return { 
    success: true,
    errors: {},
  }
}

export type CareerState = {
  errors: {
    name?: string[];
    email?: string[];
    phone?: string[];
    resume?: string[];
  };
  success: boolean;
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
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // send email
  console.log(validatedFields)
  
  return { 
    success: true,
    errors: {},
  }
}
