"use client"

import Modal from "@/components/modal"
import Title from "@/components/title"
import Heading from "./heading"

export default function ThankModal({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="my-28 md:my-24">
        <Title
          text="ДЯКУЄМО"
          className="hidden opacity-[0.15] md:-mr-16 md:ml-32 md:flex md:text-[8.5vw] xl:-mx-16 xl:text-[12.5vw]"
        />
        <div className="mt-9 md:-mt-24 md:pl-[50%]">
          <Heading className="mb-4 max-w-[250px] md:mb-8">
            Дякуємо за повідомлення!
          </Heading>
          <p className="max-w-[350px] text-base font-light text-[#666]">
            Ми звʼяжемося з Вами найближчим часом
          </p>
        </div>
      </div>
    </Modal>
  )
}
