'use client'

import Modal from "@/src/components/modal"
import Title from "@/src/components/title";
import Heading from "./heading";

export default function ThankModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="my-28 md:my-24">
        <Title text="ДЯКУЄМО" className="opacity-[0.15] md:-mr-16 md:ml-32 xl:-mx-16 md:text-[8.5vw] xl:text-[12.5vw] hidden md:flex" />
        <div className="md:pl-[50%] md:-mt-24 mt-9">
          <Heading className="max-w-[250px] mb-4 md:mb-8">Дякуємо за повідомлення!</Heading>
          <p className="text-[#666] font-light text-base max-w-[350px]">Ми звʼяжемося з Вами найближчим часом</p>
        </div>
      </div>
    </Modal>
  )
}
