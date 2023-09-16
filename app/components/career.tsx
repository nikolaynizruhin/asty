export default function Career() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="flex justify-center">
        <h1 className="text-[180px] font-bold tracking-[.35em] leading-none text-black opacity-[0.02] -mb-28 -mr-[.35em]">
          КАР’ЄРА
        </h1>
      </div>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-3xl max-w-[250px] tracking-wide">
            Стати частинкою нашої команди
          </h2>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-sm tracking-wide font-light leading-6 text-[#666] lg:max-w-none lg:grid-cols-2">
            <div>
              Завжди раді бачити у своїй команді талановитих людей. Давай разом будемо розвиватися, шукати та знаходити нестандартні рішення, слідувати ритму компанії та створювати таку атмосферу, в якій хочеться творити кожного дня.
            </div>
          </div>
          <div className="mt-10 flex">
            <a
              href="#"
              className="border border-black bg-white px-16 py-4 text-xs tracking-wider font-medium text-black hover:text-white hover:bg-black"
            >
              ДАВАЙТЕ ЗНАЙОМИТИСЬ
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}