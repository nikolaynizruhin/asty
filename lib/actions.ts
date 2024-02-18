'use server'

import sendEmail from "./mail";
import { careerSchema, contactSchema } from "./validations";
import { getBuffer } from "./utils";

export type ContactState = {
  errors: {
    name?: string[];
    email?: string[];
    message?: string[];
    terms?: string[];
  };
  success: boolean;
};

export async function sendContactEmail(prevState: ContactState, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    terms: formData.get('terms'),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  await sendEmail(
    'Контактна форма',
    `
      Ім'я: ${formData.get('name')}\n
      Email: ${formData.get('email')}\n
      Повідомлення: ${formData.get('message')}
    `
  );

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
    terms?: string[];
  };
  success: boolean;
};

export async function sendCareerEmail(prevState: CareerState, formData: FormData) {
  const validatedFields = careerSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    resume: formData.get('resume'),
    terms: formData.get('terms'),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const resume = formData.get('resume') as File;

  await sendEmail(
    'Відгук на ваканцію',
    `
      Ім'я: ${formData.get('name')}\n
      Email: ${formData.get('email')}\n
      Телефон: ${formData.get('phone')}
    `,
    [
      {
        filename: 'resume.pdf',
        content: await getBuffer(resume),
      }
    ]
  );

  return { 
    success: true,
    errors: {},
  }
}
