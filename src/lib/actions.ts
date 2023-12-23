'use server'
 
export async function sendContactEmail(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  }

  console.log(rawFormData)
  
  // validate & mutate data
  // revalidate cache
}

export async function sendCareerEmail(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('phone'),
    resume: formData.get('resume'),
  }

  console.log(rawFormData)
  
  // validate & mutate data
  // revalidate cache
}
