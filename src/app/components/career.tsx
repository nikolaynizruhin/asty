'use client'

import Button from "@/src/components/button"
import Title from "@/src/components/title";
import CareerModal from "@/src/app/components/career-modal"
import { useState } from "react"

export default function Career() {
  const [open, setOpen] = useState(false)

  return (
    <div id="career" className="bg-white py-14 sm:py-48">
      <Title text="КАР’ЄРА" className="-mb-[8vw] 2xl:-mb-[10vw] mx-[9vw] hidden md:flex" />
      <div className="mx-auto max-w-lg xl:max-w-4xl px-4">
        <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-4xl max-w-[250px]">
          Стати частинкою нашої команди
        </h2>
        <div className="mt-7 md:mt-10 grid grid-cols-1 gap-3 xl:gap-8 text-sm xl:text-base font-light text-[#666] xl:grid-cols-2">
          <p>
            Завжди раді бачити у своїй команді талановитих людей. Давай разом будемо розвиватися, шукати та знаходити нестандартні рішення, слідувати ритму компанії та створювати таку атмосферу, в якій хочеться творити кожного дня.
            Maecenas efficitur, ligula et euismod consequat, enim nibh tincidunt magna, sit amet hendrerit nulla massa in metus. Aenean ullamcorper orci sit amet sem consequat eleifend. Donec turpis enim, feugiat sed ante id, ornare faucibus arcu.
          </p>
          <p>
            Завжди раді бачити у своїй команді талановитих людей. Давай разом будемо розвиватися, шукати та знаходити нестандартні рішення, слідувати ритму компанії та створювати таку атмосферу, в якій хочеться творити кожного дня.
            Maecenas efficitur, ligula et euismod consequat, enim nibh tincidunt magna, sit amet hendrerit nulla massa in metus. Aenean ullamcorper orci sit amet sem consequat eleifend. Donec turpis enim, feugiat sed ante id, ornare faucibus arcu.
          </p>
        </div>
        <div className="mt-12 md:mt-14 flex">
          <Button onClick={() => setOpen(true)}>
            ДАВАЙТЕ ЗНАЙОМИТИСЬ
          </Button>
          <CareerModal open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  )
}