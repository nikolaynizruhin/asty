'use client'

import { useFormState } from 'react-dom'
import Modal from "@/src/components/modal"
import Input from "@/src/components/input"
import Button from "@/src/components/button"
import { Dialog } from '@headlessui/react'
import { sendContactEmail } from "../lib/actions"

const initialState = {
  success: false,
}

export default function ContactModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const [state, formAction] = useFormState(sendContactEmail, initialState)

  if (state.success) {
    setOpen(false);
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      <form action={formAction}>
        <Dialog.Title as="h3" className="text-3xl md:text-4xl font-bold text-white md:max-w-[350px] mb-9 xl:mb-20">
          Напишіть нам
        </Dialog.Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-10 xl:gap-x-40 md:mr-6 xl:mr-24">
          <Input name="name" label="Імʼя" required />
          <Input name="message" label="Повідомлення" required />
          <Input name="email" label="Пошта" required />
        </div>
        <Button className="mt-11 md:mt-20 xl:mt-32" isDark>
          ВІДПРАВИТИ
        </Button>
      </form>
    </Modal>
  )
}
