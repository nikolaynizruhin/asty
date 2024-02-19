'use client'

import { useFormState } from 'react-dom'
import Modal from "@/components/modal"
import Input from "@/components/input"
import { Dialog } from '@headlessui/react'
import { sendContactEmail } from "../lib/actions"
import { useThankModal } from '../lib/hooks'
import Heading from './heading'
import { SubmitButton } from './submit-button'
import TermsCheckbox from './terms-checkbox'

export default function ContactModal({ open, setOpen, setOpenThank }: { open: boolean; setOpen: (open: boolean) => void; setOpenThank: (open: boolean) => void }) {
  const [state, action] = useFormState(sendContactEmail, { success: false, errors: {} })

  useThankModal(state.success, setOpen, setOpenThank);

  return (
    <Modal open={open} setOpen={setOpen}>
      <form action={action}>
        <Dialog.Title as='div'>
          <Heading className='md:max-w-[350px] mb-9 xl:mb-20'>Напишіть нам</Heading>
        </Dialog.Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-10 xl:gap-x-40 md:mr-6 xl:mr-24">
          <Input name="name" label="Імʼя" required errors={state.errors?.name} />
          <Input name="message" label="Повідомлення" required errors={state.errors?.message} />
          <Input name="email" label="Пошта" required errors={state.errors?.email} />
        </div>
        <TermsCheckbox errors={state.errors?.terms} />
        <SubmitButton />
      </form>
    </Modal>
  )
}
