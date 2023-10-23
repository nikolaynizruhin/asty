import Button from "@/components/button";
import Title from "@/components/title";

export default function Career() {
  return (
    <div className="bg-white py-14 sm:py-48">
      <Title text="КАР’ЄРА" className="-mb-[8vw] 2xl:-mb-[10vw] mx-[9vw] hidden md:flex" />
      <div className="mx-auto max-w-lg xl:max-w-4xl px-4">
        <h2 className="mt-2 text-2xl font-semibold text-gray-900 sm:leading-10 md:text-3xl max-w-[250px] tracking-wide">
          Стати частинкою нашої команди
        </h2>
        <div className="mt-7 md:mt-10 grid grid-cols-1 gap-3 xl:gap-8 text-xs xl:text-sm tracking-normal xl:tracking-wide font-extralight leading-5 xl:leading-6 text-[#666] xl:grid-cols-2">
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
          <Button href="#">
            ДАВАЙТЕ ЗНАЙОМИТИСЬ
          </Button>
        </div>
      </div>
    </div>
  )
}