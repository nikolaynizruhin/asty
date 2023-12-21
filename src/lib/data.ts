const projects = [
  {
    id: 1,
    slug: 'plavdom',
    title: 'Заміський будинок на воді',
    subtitle: 'Monochrome interior in the shade of the Spanish sun',
    description: 'Це один з найулюбленіших проєктів архітектурно-дизайнерського бюро ASTY. Заміський будинок на воді в котеджному містечку. Ми використали для оздоблення спокійну кольорову гаму, дерев’яні меблі та натуральний текстиль, що дають відчуття поєднання з природою. Розташована поряд лаунж зона дає можливість відпочити та розслабитись дивлячись на красиві пейзажі та воду крізь великі панорамні вікна. Зверніть увагу на поєднання міксу дерев’яних кухонних фасадів та фартуху з каменю, які виглядають цілісно та гармонійно. А центральне місце в будинку займає камін.',
    details: [
      {
        icon: "geo-alt",
        title: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        title: "Площа",
        description: "130 кв.м",
      },
      {
        icon: "calendar3",
        title: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        title: "Стиль дизайну",
        description: "Мінімалізм",
      }
    ],
  },
  {
    id: 2,
    slug: 'riviera',
    title: 'Riviera Village',
    subtitle: 'Monochrome interior in the shade of the Spanish sun',
    description: "Кухня-вітальня вражає своєю стильною та сучасною обстановкою, де вдало поєднуються функціональність та естетика. Кольорова гама, що переважає в приміщенні, включає в себе різні відтінки сірого, білого і теплих відтінків дерева. Стіни прикрашені дерев'яними панелями, які створюють атмосферу тепла та затишку. Вони додають текстур і природності до інтер'єру, створюючи гармонійний фон для всього простору. На стелі встановлена акцентна чорна підсвітка, яка створює враження легкості і елегантності. Це освітлення є не лише джерелом світла, але і стильним дизайнерським елементом, який додає сучасності в цей простір.",
    details: [
      {
        icon: "geo-alt",
        title: "Локація",
        description: "Riviera Village",
      },
      {
        icon: "houses",
        title: "Площа",
        description: "450 кв.м",
      },
      {
        icon: "calendar3",
        title: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        title: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 3,
    slug: 'goodlife-park',
    title: 'Goodlife Park',
    subtitle: 'Monochrome interior in the shade of the Spanish sun',
    description: "Головним завданням архітекторів і дизайнерів ASTY було створення затишної та домашньої атмосфери у всьому будинку, тому ми пофарбували його у теплі, м'які кольори та поєднали їх з каменем і деревом. Ми вирішили зробити поглиблення у підлозі, що дозволило візуально розділити зони і зробити інтер'єр більш цікавим. Естетика дизайну проявляється через природні матеріали з додаванням художніх текстур. Панорамні вікна, спокійні відтінки та простір сповнений природнім світлом - всі ці елементи доповнюють один одного та роблять інтер’єр фантастично гарним.",
    details: [
      {
        icon: "geo-alt",
        title: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        title: "Площа",
        description: "427 кв.м",
      },
      {
        icon: "calendar3",
        title: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        title: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 4,
    slug: 'landysh',
    title: 'Landysh',
    subtitle: 'Monochrome interior in the shade of the Spanish sun',
    description: "Одноповерховий будиночок у стилі модернізм з виходом до власного саду від архітектурно-дизайнерського бюро ASTY. Коли не хочеться перевантажувати інтер’єр зайвими деталями та яскравими композиціями кольорів, ми шукаємо натхнення в тому, що нас оточує.  Навколишній ландшафт використаний як частина загального екстер’єру, що гармонійно доповнює будову. Простора та функціональна кухня має велику робочу поверхню для приготування їжі, кухонний острів та обідній стіл для  затишних сніданків, обідів та вечерь з родиною або друзями.",
    details: [
      {
        icon: "geo-alt",
        title: "Локація",
        description: "Козин",
      },
      {
        icon: "houses",
        title: "Площа",
        description: "100 кв.м",
      },
      {
        icon: "calendar3",
        title: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        title: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 5,
    slug: 'park-avenue',
    title: 'Park Avenue',
    subtitle: 'Monochrome interior in the shade of the Spanish sun',
    description: "Апартаменти з видом на місто з висоти пташиного польоту. Коли ми побачили ці краєвиди, без сумнівів вирішили, що це і буде головний акцент. Великі панорамні вікна наповнюють квартиру світлом та візуально розширюють простір. Дизайнери ASTY використали графітові відтінки, поєднали їх з деревом та додали чорний колір, щоб створити неповторний стиль. Функціональною особливістю є окремий острів для приготування улюблених страв у зоні кухні. Просторі шафи зручно використати для наповнення всіма необхідними аксесуарами та спеціями. Відкриємо вам таємницю, за дверцятами є винний холодильник.",
    details: [
      {
        icon: "geo-alt",
        title: "Локація",
        description: "ЖК Park Avenue",
      },
      {
        icon: "houses",
        title: "Площа",
        description: "173 кв.м",
      },
      {
        icon: "calendar3",
        title: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        title: "Стиль дизайну",
        description: "Мінімалізм",
      }
    ],
  },
  {
    id: 6,
    slug: 'park-avenue-2',
    title: 'Park Avenue 2',
    subtitle: 'Monochrome interior in the shade of the Spanish sun',
    description: "Перед вами дизайн затишної спальної кімнати у поєднанні з приватною туалетною кімнатою, максимально зручною та функціональною. На стінах дизайнери ASTY використали легкий та витриманий пилястий тон фарби та додали лаконічні шпоновані мдф панелі за великим ліжком. Підлога застелена мʼяким килимом по всій площі кімнати, щоб було комфортно та приємно ходити босоніж. Такий дизайн додає кімнаті теплоти і забезпечує приємний контраст з іншими поверхнями. Для надання особливого шарму і стилю використано декілька акцентних деталей, таких як освітлення та елементи декору. Вони створюють точкові фокуси у просторі і підкреслюють унікальний характер кімнати.",
    details: [
      {
        icon: "geo-alt",
        title: "Локація",
        description: "ЖК Park Avenue",
      },
      {
        icon: "houses",
        title: "Площа",
        description: "173 кв.м",
      },
      {
        icon: "calendar3",
        title: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        title: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 7,
    slug: 'sky-avenue-2',
    title: 'Sky Avenue 2',
    subtitle: 'Monochrome interior in the shade of the Spanish sun',
    description: "Одна з улюблених квартир дизайнерів ASTY. Скандинавський стиль робить лофт візуально більшим та функціональним, зберігаючи при цьому свою лаконічність та теплоту. Однією з важливих особливостей є акцент на природних матеріалах і натуральному освітленні, яке грає ключову роль у створенні атмосфери в приміщенні. Ми використали різні сценарії освітлення, які можна коригувати в залежності від часу дня та настрою. Це включає в себе вбудоване освітлення, підвісні лампи, настінні світильники та навіть свічки, які додають атмосферу тепла та затишку вечорами.",
    details: [
      {
        icon: "geo-alt",
        title: "Локація",
        description: "ЖК Sky Avenue",
      },
      {
        icon: "houses",
        title: "Площа",
        description: "91 кв.м",
      },
      {
        icon: "calendar3",
        title: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        title: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 8,
    slug: 'sky-avenue',
    title: 'Sky Avenue',
    subtitle: 'Monochrome interior in the shade of the Spanish sun',
    description: "Приваблива та стильна спальня кімната у стилі модернізм. Світлі, теплі кольори з першого погляду налаштовують на релакс та відпочинок, а м‘яке приглушене світло надає кімнаті особливого затишку. Ми використали комбінацію текстур, що ідеально доповнило інтер’єр. Відкриті полиці з підсвіткою акцентами додають інтер'єру структурної складності.  Просто і лаконічно.",
    details: [
      {
        icon: "geo-alt",
        title: "Локація",
        description: "ЖК Sky Avenue",
      },
      {
        icon: "houses",
        title: "Площа",
        description: "91 кв.м",
      },
      {
        icon: "calendar3",
        title: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        title: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 9,
    slug: 'goodlife-park-2',
    title: 'Goodlife Park 2',
    subtitle: 'Monochrome interior in the shade of the Spanish sun',
    description: "Розробка дизайн-прожкту спальної кімнати одна з найважливіших задач.  Вона повинна бути мінімалістичною та дарувати відчуття комфорту. Ця спальня втілює в собі елегантність та затишок завдяки бежевій кольоровій палітрі. Нейтральні відтінки від світлого пісочного до глибокого шоколадного, створюють атмосферу спокою та гармонії. Лаконічність цієї спальні вражає: м'які бежеві стіни створюють чисте тло для інших деталей. Ліжко з м’якою оббивкою надає спальні особливого затишку та комфорту.",
    details: [
      {
        icon: "geo-alt",
        title: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        title: "Площа",
        description: "395 кв.м",
      },
      {
        icon: "calendar3",
        title: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        title: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
]

export default projects