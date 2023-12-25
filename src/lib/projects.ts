import { Project } from "./definitions"

const projects: Project[] = [
  {
    id: 1,
    slug: 'plavdom',
    name: 'Заміський будинок на воді',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: 'Це один з найулюбленіших проєктів архітектурно-дизайнерського бюро ASTY. Заміський будинок на воді в котеджному містечку. Ми використали для оздоблення спокійну кольорову гаму, дерев’яні меблі та натуральний текстиль, що дають відчуття поєднання з природою. Розташована поряд лаунж зона дає можливість відпочити та розслабитись дивлячись на красиві пейзажі та воду крізь великі панорамні вікна. Зверніть увагу на поєднання міксу дерев’яних кухонних фасадів та фартуху з каменю, які виглядають цілісно та гармонійно. А центральне місце в будинку займає камін.',
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "130 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Мінімалізм",
      }
    ],
  },
  {
    id: 2,
    slug: 'riviera',
    name: 'Riviera Village',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Цей інтер'єр вражає своєю гармонією, використанням природних матеріалів та стильними деталями, що створюють сучасну та затишну атмосферу. Кольорова гама включає в себе різні відтінки сірого та білого у поєднанні з деревом. Стіни прикрашені панелями, які додають текстур і природності до інтер'єру, створюючи гармонійний фон для всього простору. На стелі встановлена акцентна чорна підсвітка, яка створює враження легкості і елегантності. Це освітлення є не лише джерелом світла, але і стильним дизайнерським елементом. Кухонний острів стає центром уваги та практичним елементом інтер'єру. Його поверхня виконана у сірому кольорі, що доповнює загальну кольорову гаму. Острів служить як функціональний робочий простір, а також місце для сніданків чи неформальних обідів.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Riviera Village",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "450 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 3,
    slug: 'goodlife-park',
    name: 'Goodlife Park',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Головним завданням архітекторів і дизайнерів ASTY було створення затишної та домашньої атмосфери у всьому будинку, тому ми пофарбували його у теплі, м'які кольори та поєднали їх з каменем і деревом. Ми вирішили зробити поглиблення у підлозі, що дозволило візуально розділити зони і зробити інтер'єр більш цікавим. Естетика дизайну проявляється через природні матеріали з додаванням художніх текстур. Панорамні вікна, спокійні відтінки та простір сповнений природнім світлом - всі ці елементи доповнюють один одного та роблять інтер’єр фантастично гарним.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "427 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 4,
    slug: 'landysh',
    name: 'Landysh',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Одноповерховий будиночок у стилі модернізм з виходом до власного саду від архітектурно-дизайнерського бюро ASTY. Коли не хочеться перевантажувати інтер’єр зайвими деталями та яскравими композиціями кольорів, ми шукаємо натхнення в тому, що нас оточує.  Навколишній ландшафт використаний як частина загального екстер’єру, що гармонійно доповнює будову. Простора та функціональна кухня має велику робочу поверхню для приготування їжі, кухонний острів та обідній стіл для  затишних сніданків, обідів та вечерь з родиною або друзями.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Козин",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "100 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 5,
    slug: 'park-avenue',
    name: 'Park Avenue',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Апартаменти з видом на місто з висоти пташиного польоту. Коли ми побачили ці краєвиди, без сумнівів вирішили, що це і буде головний акцент. Великі панорамні вікна наповнюють квартиру світлом та візуально розширюють простір. Дизайнери ASTY використали графітові відтінки, поєднали їх з деревом та додали чорний колір, щоб створити неповторний стиль. Функціональною особливістю є окремий острів для приготування улюблених страв у зоні кухні. Просторі шафи зручно використати для наповнення всіма необхідними аксесуарами та спеціями. Відкриємо вам таємницю, за дверцятами є винний холодильник.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "ЖК Park Avenue",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "173 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Мінімалізм",
      }
    ],
  },
  {
    id: 6,
    slug: 'park-avenue-2',
    name: 'Park Avenue 2',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Перед вами дизайн затишної спальної кімнати у поєднанні з приватною туалетною кімнатою, максимально зручною та функціональною. На стінах дизайнери ASTY використали легкий та витриманий пилястий тон фарби та додали лаконічні шпоновані мдф панелі за великим ліжком. Підлога застелена мʼяким килимом по всій площі кімнати, щоб було комфортно та приємно ходити босоніж. Такий дизайн додає кімнаті теплоти і забезпечує приємний контраст з іншими поверхнями. Для надання особливого шарму і стилю використано декілька акцентних деталей, таких як освітлення та елементи декору. Вони створюють точкові фокуси у просторі і підкреслюють унікальний характер кімнати.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "ЖК Park Avenue",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "173 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 7,
    slug: 'sky-avenue-2',
    name: 'Sky Avenue 2',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Одна з улюблених квартир дизайнерів ASTY. Скандинавський стиль робить лофт візуально більшим та функціональним, зберігаючи при цьому свою лаконічність та теплоту. Однією з важливих особливостей є акцент на природних матеріалах і натуральному освітленні, яке грає ключову роль у створенні атмосфери в приміщенні. Ми використали різні сценарії освітлення, які можна коригувати в залежності від часу дня та настрою. Це включає в себе вбудоване освітлення, підвісні лампи, настінні світильники та навіть свічки, які додають атмосферу тепла та затишку вечорами.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "ЖК Sky Avenue",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "91 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 8,
    slug: 'sky-avenue',
    name: 'Sky Avenue',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Приваблива та стильна спальня кімната у стилі модернізм. Світлі, теплі кольори з першого погляду налаштовують на релакс та відпочинок, а м‘яке приглушене світло надає кімнаті особливого затишку. Ми використали комбінацію текстур, що ідеально доповнило інтер’єр. Відкриті полиці з підсвіткою акцентами додають інтер'єру структурної складності.  Просто і лаконічно.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "ЖК Sky Avenue",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "91 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 9,
    slug: 'goodlife-park-2',
    name: 'Goodlife Park 2',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Розробка дизайн-прожкту спальної кімнати одна з найважливіших задач.  Вона повинна бути мінімалістичною та дарувати відчуття комфорту. Ця спальня втілює в собі елегантність та затишок завдяки бежевій кольоровій палітрі. Нейтральні відтінки від світлого пісочного до глибокого шоколадного, створюють атмосферу спокою та гармонії. Лаконічність цієї спальні вражає: м'які бежеві стіни створюють чисте тло для інших деталей. Ліжко з м’якою оббивкою надає спальні особливого затишку та комфорту.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "395 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 10,
    slug: 'goodlife-park-3',
    name: 'Goodlife Park 3',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Коли ми комнадою ASTY розробляли архітектуру і дизайн-проєкт будинку перед нами було поставлено багато задач. Цей проєкт вирізняється поєднанням різних матеріалів, які не вимагають певних правил та обмежень. А навпаки - створюють певну свободу. Завдяки великому простору окрім комфортної кухонної робочої зони ми ще розмістили острів та великий обідній стіл. Особливу увагу приділили елементам інтер’єру, адже резиденти апартів мають вишуканий смак і кожна деталь має приносити естетичне задоволення.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "395 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 11,
    slug: 'goodlife-park-4',
    name: 'Goodlife Park 4',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Спальня з власною ванною та гардеробною – приміщення, що вражає гармонією та елегантністю. Інтер'єр розкривається в приємних тонах, створюючи атмосферу спокою та затишку. Стіни кімнати оздоблені дерев'яними рейками, які додають тепла і стильного вигляду. Колірна палітра базується на трьох основних кольорах: білому, бежевому та акцентному чорному. Велике вікно у ванній пропускає природне світло, заповнюючи приміщення свіжістю та дозволяючи насолоджуватися чудовим видом навколишнього ландшафту.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "392 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Мінімалізм",
      }
    ],
  },
  {
    id: 12,
    slug: 'goodlife-park-5',
    name: 'Goodlife Park 5',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Це наш один з найулюбленіших проєктів, які ми реалізували від концепції до реалізації, від архітектури до маленькою дрібнички в кожній кімнаті. Цей дизайн інтер’єру кухні-вітальні від ASTY виглядає сучасним і мінімалістичним. Кухня має довгу дерев’яну стійку з раковиною та всією необхідною вбудованою технікою. Підлога розділена на дві частини і в робочій зоні викладена плитка, а основна зона виконана зі світлого дерева. Висока стеля візуально збільшує приміщення і дає можливість використати різні варіації освітлення.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "392 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Мінімалізм",
      }
    ],
  },
  {
    id: 13,
    slug: 'goodlife-park-6',
    name: 'Goodlife Park 6',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Сучасна та мінімалістична спальна кімната від дизайнерів ASTY. Кімната має нейтральну колірну палітру, чисті лінії та природні матеріали, такі як дерево та камінь. Велике зручне ліжко сірого кольору та світла деревяна підлога. Освітлення виконано уздовж всієї стелі, що візуально робить кімнату більш довгою. А на стіні ми бачимо абстрактне полотно, яке доповнює весь інтер'єр.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "180 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 14,
    slug: 'goodlife-park-7',
    name: 'Goodlife Park 7',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Ідеальний будинок в якому все продумано до найменших дрібниць, функціонально, практично та водночас стильно. Мінімалізм майже у всьому - монохромна гама, лаконічні та стильні меблі, акцентоване освітлення. Команда ASTY розробила архітектурне рішення будинку та дизайн інтер'єру, який вийшов дуже легким. Ми використали дерево як основний акцент у зоні передпокою та кабінеті, і цим підкреслили  елегантність та вишуканість інтерʼєру та підтримали цілісність дизайну у всьому будинку.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "180 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 15,
    slug: 'goodlife-park-8',
    name: 'Goodlife Park 8',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Команда ASTY дуже любить проєктувати дитячі кімнати, а це кімната для маленького дослідника. Розробляючи дизайн ми додатково вивчили різновидність зірок, галактик та планет, щоб створити космічний світ за всіма правилами, де малюк зміг відчути себе справжнім астрономом. Біля вікна ми розмістили місце для навчання та додали полиці для зберігання улюблених іграшок. Кімната, в якій можна відчути себе часткою безкінечного космосу та насолоджуватись мрією про подорожі на інші планети.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "328 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 16,
    slug: 'goodlife-park-9',
    name: 'Goodlife Park 9',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Тераса - це місце сили, місце спокою, місце натхнення. Кожен куточок можна зробити унікальним та ідеально пристосованим до стилю життя та потреб. Ми в команді ASTY дуже любимо проєктувати тераси, адже від цього ми отримуємо особливе задоволення. Для підлоги використали дошки з натурального дерева та покрили їх спеціальною фарбою, яка зберігає природний колір та текстуру, щоб забезпечити довговічність та додатковий захист.",
    category: 'interior',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "328 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 17,
    slug: 'goodlife-park-10',
    name: 'Goodlife Park 10',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisl euismod, aliquam nisl quis, ultrices nisl. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis.",
    category: 'architecture',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "328 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 18,
    slug: 'goodlife-park-11',
    name: 'Goodlife Park 11',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisl euismod, aliquam nisl quis, ultrices nisl. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis.",
    category: 'architecture',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "328 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 19,
    slug: 'goodlife-park-12',
    name: 'Goodlife Park 12',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisl euismod, aliquam nisl quis, ultrices nisl. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis.",
    category: 'architecture',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "328 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 20,
    slug: 'goodlife-park-13',
    name: 'Goodlife Park 13',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisl euismod, aliquam nisl quis, ultrices nisl. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis.",
    category: 'architecture',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "328 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 21,
    slug: 'goodlife-park-14',
    name: 'Goodlife Park 14',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisl euismod, aliquam nisl quis, ultrices nisl. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis.",
    category: 'architecture',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "328 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 22,
    slug: 'goodlife-park-15',
    name: 'Goodlife Park 15',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisl euismod, aliquam nisl quis, ultrices nisl. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis.",
    category: 'architecture',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Goodlife Park",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "328 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 23,
    slug: 'landysh-2',
    name: 'Landysh 2',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisl euismod, aliquam nisl quis, ultrices nisl. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis.",
    category: 'architecture',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Козин",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "100 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
  {
    id: 24,
    slug: 'riviera-2',
    name: 'Riviera Village 2',
    description: 'Monochrome interior in the shade of the Spanish sun',
    concept: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisl euismod, aliquam nisl quis, ultrices nisl. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis. Donec auctor, nisl quis aliquam ultricies, nisl nisl aliquet nisl, quis aliquam nisl nisl quis.",
    category: 'architecture',
    details: [
      {
        icon: "geo-alt",
        name: "Локація",
        description: "Riviera Village",
      },
      {
        icon: "houses",
        name: "Площа",
        description: "450 кв.м",
      },
      {
        icon: "calendar3",
        name: "Термін реалізації",
        description: "2024",
      },
      {
        icon: "vector-pen",
        name: "Стиль дизайну",
        description: "Модернізм",
      }
    ],
  },
]

export default projects