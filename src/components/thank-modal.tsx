'use client'

import Modal from "@/src/components/modal"
import Title from "@/src/components/title";

export default function ThankModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Title text="THANKS" className="opacity-[0.15]" />
      <div className="xl:pl-[50%] -mt-24">
        <h2 className="text-2xl font-bold text-white md:text-4xl max-w-[250px] mb-6">
          Thank you for your message!
        </h2>
        <p className="text-[#666] font-light text-base max-w-[350px]">We will reply to you as soon as possible</p>
      </div>
    </Modal>
  )
}
