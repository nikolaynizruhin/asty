'use client'

import { useFormState } from 'react-dom'
import Modal from "@/src/components/modal"
import Input from "@/src/components/input"
import Button from "@/src/components/button"
import { Dialog } from '@headlessui/react'
import { sendContactEmail } from "../lib/actions"
import { useEffect } from 'react'

const initialState = {
  success: false,
}

export default function ContactModal({ open, setOpen, setOpenThank }: { open: boolean; setOpen: (open: boolean) => void; setOpenThank: (open: boolean) => void }) {
  const [state, formAction] = useFormState(sendContactEmail, initialState)

  useEffect(() => {
    if (state.success) {
      setOpen(false);
      setOpenThank(true);
    }
  }, [state.success]);

  return (
    <Modal open={open} setOpen={setOpen}>
      <form action={formAction}>
        <Dialog.Title as="h3" className="text-3xl md:text-4xl font-bold text-white md:max-w-[350px] mb-9 xl:mb-20">
          Напишіть нам
        </Dialog.Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-10 xl:gap-x-40 md:mr-6 xl:mr-24">
          <Input name="name" label="Імʼя" required error={state.errors?.name?.[0]} />
          <Input name="message" label="Повідомлення" required error={state.errors?.message?.[0]} />
          <Input name="email" label="Пошта" required error={state.errors?.email?.[0]} />
        </div>
        <Button className="mt-11 md:mt-20 xl:mt-32" isDark>
          ВІДПРАВИТИ
        </Button>
      </form>
    </Modal>
  )
}
