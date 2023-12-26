'use client'

import Button from "@/src/components/button"
import Title from "@/src/components/title";
import CareerModal from "@/src/app/components/career-modal"
import { useState } from "react"
import ThankModal from "@/src/components/thank-modal";
import Heading from "@/src/components/heading";
import Container from "@/src/components/container";

export default function Career() {
  const [openCareer, setOpenCareer] = useState(false)
  const [openThank, setOpenThank] = useState(false)

  return (
    <div id="career" className="bg-white py-14 sm:py-48">
      <Title text="КАР’ЄРА" className="-mb-[8vw] 2xl:-mb-[10vw] mx-[9vw] hidden md:flex" />
      <Container>
        <Heading className="max-w-[250px]" isDark>Стати частиною нашої команди</Heading>
        <div className="mt-7 md:mt-10 grid grid-cols-1 gap-3 xl:gap-8 text-sm xl:text-base font-light text-[#666] xl:grid-cols-2">
          <p>
            Завжди раді бачити у своїй команді талановитих людей. Давайте разом будемо розвиватися, шукати та знаходити нестандартні рішення, слідувати ритму компанії та створювати таку атмосферу, в якій хочеться творити кожного дня. Для нас важливо, щоб ми були на одній хвилі і працювали із задоволенням, адже ми вважаємо, що кожен вносить вагомий внесок у наші проєкти.
          </p>
          <p>
            Кожен з нас розділяє цінності компанії та доповнює один одного. Ми приймаємо нові виклики, переживаємо труднощі разом, працюємо єдиним механізмом та досягаємо неможливого пліч-о-пліч. Ми стрімко ростемо і розвиваємося, тому шукаємо собі в команду друзів, однодумців і просто класних фахівців. Якщо ти любиш свою справу і готовий розділити свій час з нами, ласкаво просимо!
          </p>
        </div>
        <div className="mt-12 md:mt-14 flex">
          <Button onClick={() => setOpenCareer(true)}>
            ДАВАЙТЕ ЗНАЙОМИТИСЬ
          </Button>
          <CareerModal open={openCareer} setOpen={setOpenCareer} setOpenThank={setOpenThank} />
          <ThankModal open={openThank} setOpen={setOpenThank} />
        </div>
      </Container>
    </div>
  )
}