'use client'

import { useActionState } from "react";
import Modal from "@/components/modal"
import Input from "@/components/input"
import { DialogTitle } from '@headlessui/react'
import { sendCareerEmail } from "@/lib/actions"
import { useThankModal } from '@/lib/hooks'
import Heading from '@/components/heading'
import { SubmitButton } from '@/components/submit-button'
import TermsCheckbox from '../terms-checkbox'

export default function ThankModal({ open, setOpen, setOpenThank }: { open: boolean; setOpen: (open: boolean) => void; setOpenThank: (open: boolean) => void }) {
  const [state, action] = useActionState(sendCareerEmail, { success: false, errors: {} })

  useThankModal(state.success, setOpen, setOpenThank);

  return (
    <Modal open={open} setOpen={setOpen}>
      <form action={action}>
        <DialogTitle as='div'>
          <Heading className='md:max-w-[350px] mb-9 xl:mb-20'>Приєднуйся до нашої команди!</Heading>
        </DialogTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-10 xl:gap-x-40 md:mr-6 xl:mr-24">
          <Input name="name" label="Імʼя" required errors={state.errors?.name} />
          <Input name="email" label="Пошта" required errors={state.errors?.email} />
          <Input name="phone" label="Телефон" errors={state.errors?.phone} />
          <Input name="resume" label="Завантажити резюме" labelClasses='hover:text-white underline underline-offset-[6px] decoration-1 cursor-pointer' type="file" accept="application/pdf" required errors={state.errors?.resume} />
        </div>
        <TermsCheckbox errors={state.errors?.terms} />
        <SubmitButton />
      </form>
    </Modal>
  )
}
