'use client'

import { useFormState, useFormStatus } from 'react-dom'
import Modal from "@/src/components/modal"
import Input from "@/src/components/input"
import Button from "@/src/components/button"
import { Dialog } from '@headlessui/react'
import { sendCareerEmail } from "@/src/lib/actions"
import { useThankModal } from '@/src/lib/hooks'

const initialState = {
  success: false,
  errors: {
    name: [],
    email: [],
    phone: [],
    resume: []
  }
}

export default function ThankModal({ open, setOpen, setOpenThank }: { open: boolean; setOpen: (open: boolean) => void; setOpenThank: (open: boolean) => void }) {
  const [state, formAction] = useFormState(sendCareerEmail, initialState)
  const { pending } = useFormStatus()

  useThankModal(state.success, setOpen, setOpenThank);

  return (
    <Modal open={open} setOpen={setOpen}>
      <form action={formAction}>
        <Dialog.Title as="h3" className="text-3xl md:text-4xl font-bold text-white md:max-w-[350px] mb-9 xl:mb-20">
          Приєднуйся до нашої команди!
        </Dialog.Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-10 xl:gap-x-40 md:mr-6 xl:mr-24">
          <Input name="name" label="Імʼя" required errors={state.errors.name} />
          <Input name="email" label="Пошта" required errors={state.errors.email} />
          <Input name="phone" label="Телефон" required errors={state.errors.phone} />
          <Input name="resume" label="Резюме" type="file" accept="application/pdf" required errors={state.errors?.resume} />
        </div>
        <Button className="mt-11 md:mt-20 xl:mt-32" aria-disabled={pending} isDark>
          ВІДПРАВИТИ
        </Button>
      </form>
    </Modal>
  )
}
