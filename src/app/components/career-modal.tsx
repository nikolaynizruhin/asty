'use client'

import Modal from "@/src/components/modal"
import Input from "@/src/components/input"
import Button from "@/src/components/button"

export default function CareerModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <Modal open={open} setOpen={setOpen} title="We are waiting for you in our team!">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-10 xl:gap-x-40 md:mr-6 xl:mr-24">
          <Input name="name" label="Name" />
          <Input name="vacancy" label="Vacancy" />
          <Input name="email" label="Email" />
          <Input name="message" label="Message" />
          <Input name="phone" label="Phone" />
        </div>
        <Button className="mt-11 md:mt-20 xl:mt-32" isDark onClick={() => setOpen(false)}>
          SEND REQUEST
        </Button>
      </form>
    </Modal>
  )
}
