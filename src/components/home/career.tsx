import CareerButton from "./career-button";
import Columns from "./columns";

export default function Career() {
  return (
    <Columns
      id="career"
      title="КАР’ЄРА"
      heading="Стати частиною нашої команди"
      button={<div className="mt-12 md:mt-14 flex"><CareerButton /></div>}
    >
      <p>Завжди раді бачити у своїй команді талановитих людей. Давайте разом будемо розвиватися, шукати та знаходити нестандартні рішення, слідувати ритму компанії та створювати таку атмосферу, в якій хочеться творити кожного дня. Для нас важливо, щоб ми були на одній хвилі і працювали із задоволенням, адже ми вважаємо, що кожен вносить вагомий внесок у наші проєкти. Кожен з нас розділяє цінності компанії та доповнює один одного.</p>
      <p>Ми приймаємо нові виклики, переживаємо труднощі разом, працюємо єдиним механізмом та досягаємо неможливого пліч-о-пліч. Ми стрімко ростемо і розвиваємося, тому шукаємо собі в команду друзів, однодумців і просто класних фахівців. Якщо ти любиш свою справу і готовий розділити свій час з нами, ласкаво просимо!</p>
    </Columns>
  )
}