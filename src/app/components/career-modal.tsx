'use client'

import Modal from "@/src/components/modal"
import Input from "@/src/components/input"
import Button from "@/src/components/button"
import { Dialog } from '@headlessui/react'

export default function ThankModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <form>
        <Dialog.Title as="h3" className="text-3xl md:text-4xl font-bold text-white md:max-w-[350px] mb-9 xl:mb-20">
          Приєднуйся до нашої команди!
        </Dialog.Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-10 xl:gap-x-40 md:mr-6 xl:mr-24">
          <Input name="name" label="Імʼя" />
          <Input name="email" label="Пошта" />
          <Input name="phone" label="Телефон" />
          <Input name="resume" label="Резюме" type="file" />
        </div>
        <Button className="mt-11 md:mt-20 xl:mt-32" isDark onClick={() => setOpen(false)}>
          ВІДПРАВИТИ
        </Button>
      </form>
    </Modal>
  )
}
