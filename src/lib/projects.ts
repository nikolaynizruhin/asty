import { Project } from "./definitions"

const projects: Project[] = [
  {
    id: 1,
    slug: 'floating-house',
    name: 'Floating House',
    description: 'Архітектурна функціональність з вишуканістю',
    concept: 'Будинок на воді - це сучасний і екологічний проєкт, що поєднує в собі комфорт, функціональність і гармонію з природою. Будинок має два поверхи та розташований на плавучій платформі, що закріплена за допомогою спеціальних кріплень. Панорамні вікна відкривають чудовий вид на ліс і воду. Фасад виконаний з натурального дерева, що створює відчуття злиття з оточенням. Будинок на воді - це ідеальне місце для відпочинку, релаксації і натхнення.',
    overview: 'В інтер’єрі ми використали спокійну кольорову гаму, дерев’яні меблі та натуральний текстиль, що дають відчуття поєднання з природою. Розташована поряд відкрита лаунж зона дає можливість відпочити та розслабитись. Зверніть увагу на поєднання міксу дерев’яних кухонних фасадів та фартуху з каменю, які виглядають цілісно та гармонійно. Центральне місце в будинку займає камін, який створює відчуття максимального комфорту та затишку.',
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
    description: "Монохронний інтер'єр у відтінках сірого",
    concept: "Заміський будинок - це приклад сучасної архітектури, що відображає принципи модернізму. Будинок має великі скляні поверхні, що забезпечують світлопрозорість і візуальну зв'язок з навколишнім ландшафтом.. Будинок має площу близько 450 кв.м і розподілений на два рівні. На першому рівні знаходяться вітальня, кухня, їдальня, кабінет і гостьові кімнати. На другому рівні - спальня, дитячі кімнати, гардеробні і ванни кімнати.",
    overview: "Цей інтер'єр вражає своєю гармонією, використанням природних матеріалів та стильними деталями, що створюють сучасну та затишну атмосферу. Кольорова гама включає в себе різні відтінки сірого та білого у поєднанні з деревом. Стіни прикрашені панелями, які додають текстур і природності до інтер'єру, створюючи гармонійний фон для всього простору. На стелі встановлена акцентна чорна підсвітка, яка створює враження легкості і елегантності.. Кухонний острів стає центром уваги та практичним елементом інтер'єру. Його поверхня виконана у сірому кольорі, що доповнює загальну кольорову гаму. Острів служить як функціональний робочий простір, а також місце для сніданків чи неформальних обідів.",
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
    concept: "Головним завданням архітекторів і дизайнерів ASTY було створення затишної та домашньої атмосфери у всьому будинку, тому ми пофарбували його у теплі, м’які кольори та поєднали їх з каменем і деревом. В основній зоні ми вирішили зробити поглиблення у підлозі, що дозволило візуально розділити зони і зробити інтер’єр більш цікавим. Естетика дизайну проявляється через природні матеріали з додаванням художніх текстур. Панорамні вікна, спокійні відтінки та простір сповнений природнім світлом - всі ці елементи доповнюють один одного та роблять інтер’єр фантастично гарним.",
    overview: 'Ключове місце в кімнаті займає камін, який спеціально розмістили біля вікна і зробили зі скляним екраном, щоб бачити вогонь з будь-якої точки кімнати, та мати захист від іскор та диму. При підборі меблів опирались на прості та елегантні форми, які б не перевантажували простір, але забезпечували комфорт та функціональність.',
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
    concept: "Одноповерховий будиночок у стилі модернізм з виходом до власного саду - це проєкт від архітектурно-дизайнерського бюро ASTY, де ми втілили у реальність бажання замовника мати сучасне і затишне житло. Будинок має просту і геометричну прямокутну форму, а великі скляні поверхні дозволяють проникати світлу і повітрю, а також створюють візуальну зв'язок з навколишнім ландшафтом. Кольорова гамма будинку - це поєднання дерева та каменю, що підкреслює лаконічність і елегантність стилю. Будинок має вихід до власного саду, де можна насолоджуватися природою і свіжістю.",
    overview: 'Будинок має простору та функціональну кухню, де є все необхідне для приготування їжі. Кухня має велику робочу поверхню, кухонний острів та обідній стіл, де можна проводити затишні сніданки, обіди та вечері з родиною або друзями. Будинок також має вітальню, спальні, ванні кімнати і гардероб. Такий будинок для замовника - це втілення сучасного і комфортного життя, де можна знайти натхнення в тому, що вас оточує.',
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
    concept: "Апартаменти в сучасному житловому комплексі столиці - це проєкт від дизайнерського бюро ASTY, що реалізував мрію про комфортне і стильне житло з неймовірним видом на місто. Квартира знаходиться на верхньому поверсі, що дозволяє насолоджуватися панорамою міста з висоти пташиного польоту. Коли ми разом з замовником побачили ці краєвиди, то без сумнівів вирішили, що це і буде головний акцент дизайну. Великі панорамні вікна наповнюють квартиру світлом та візуально розширюють простір.",
    overview: "В інтер’єрі ми використали графітові відтінки, поєднали їх з деревом та додали чорний колір, щоб створити неповторний стиль, що відповідає сучасним тенденціям. Апартаменти мають відкритий план, що об'єднують зону вітальні, кухні та їдальні. Функціональною особливістю є окремий острів для приготування улюблених страв у зоні кухні. Просторі шафи зручно використати для наповнення всіма необхідними аксесуарами та спеціями. Відкриємо вам таємницю, за дверцятами є винний холодильник, де можна зберігати свої найкращі колекції. Квартира також має дві спальні, дві ванні кімнати і балкон.",
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
    concept: "Дизайн затишної спальні у поєднанні з приватною туалетною кімнатою - це проєкт вякому ми створили атмосферу релаксації і комфорту. Спальна кімната має велике ліжко з м'яким матрацом. За ліжком розташовані лаконічні шпоновані мдф панелі, що додають кімнаті стилю і текстури. На стінах дизайнери ASTY використали легкий та витриманий пилястий тон фарби, що створює відчуття простору і свіжості. Підлога застелена мʼяким килимом по всій площі кімнати, щоб було комфортно та приємно ходити босоніж. Такий дизайн додає кімнаті теплоти і забезпечує приємний контраст з іншими поверхнями.",
    overview: 'Для надання особливого шарму і стилю використано декілька акцентних деталей, таких як освітлення та елементи декору. На комоді стоїть ваза зі свіжими квітами, що додають кімнаті життя і аромату. Стіни і підлога в туалетній кімнаті викладені керамічною плиткою в сірому кольорі, що створює контраст з білим кольором сантехніки. Над умивальником висить дзеркало з підсвічуванням, що забезпечує яскраве і рівномірне освітлення. Дизайн затишної спальної кімнати у поєднанні з приватною туалетною кімнатою - це приклад того, як можна створити максимально зручний та функціональний простір для відпочинку і особистої гігієни.',
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
    concept: "Квартира в скандинавському стилі - це одна з улюблених квартир дизайнерів ASTY, які створили просторий і затишний модернізм. Квартира має відкритий план, що об'єднує зону вітальні, кухні та їдальні. Квартира має білі стіни, дерев'яні підлоги та меблі, що створюють відчуття легкості та теплоти. Однією з важливих особливостей є акцент на природних матеріалах і натуральному освітленні, яке грає ключову роль у створенні атмосфери в приміщенні.",
    overview: 'Великі вікна дозволяють проникати світлу і повітрю, а також відкривають чудовий вид на місто. Ми використали різні сценарії освітлення, які можна коригувати в залежності від часу дня та настрою. Це включає в себе вбудоване освітлення, підвісні лампи, настінні світильники та навіть свічки, які додають атмосферу тепла та затишку вечорами. Квартира має також дві спальні, дві ванні кімнати і балкон.',
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
    concept: "Це одна з кімнат нашого проєкту в житловому комплексі столиці. Спальна кімната у стилі модернізм створена для спокійного сну та відпочинку. Кімната має велике двоспальне ліжко з білим постільним і сірими подушками. Над ліжком висять дві настінні лампи, що створюють м'яке приглушене світло, яке надає кімнаті особливого затишку. Стіни кімнати виконані в світлих, теплих кольорах, що з першого погляду налаштовують на релакс та відпочинок.",
    overview: "Ми використали комбінацію текстур, що ідеально доповнило інтер’єр. Відкриті полиці з підсвіткою акцентами додають інтер'єру структурної складності. На полицях можна розташувати за бажанням книги, вази, свічки та інші декоративні елементи. Спальна кімната має також функціональну гардеробну,  де зручно зберігати одяг, взуття та інші речі. Дизайн спальні вийшов досить привабливий, простий та лаконічний.",
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
    concept: "При розробці дизайн-проєкту спальної кімнати головною задачею було створити комфортний та мінімалістичний простір для сімейної пари, які дуже цінують години сну. Кімната має дарувати відчуття комфорту, безпеки та спокою. Ця спальня втілює в собі елегантність та затишок завдяки бежевій кольоровій палітрі. Нейтральні відтінки від світлого пісочного до глибокого шоколадного, створюють атмосферу спокою та гармонії. Лаконічність цієї спальні вражає: м’які бежеві стіни створюють чисте тло для інших деталей.",
    overview: 'Ліжко з м’якою оббивкою надає спальні особливого затишку та комфорту. А основною родзинкою є велике кругле дзеркало, яке круто вписується в загальний інтр’єр. Для доповнення інтер’єру ми використали декілька елементів, які надають спальні індивідуальності та характеру. Ми додали кілька рослин, які приносять життя та свіжість, а також очищають повітря та підібрали штори з легкої тканини, які добре пропускають світло та створюють затишну атмосферу.',
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
    concept: "Будинок за містом у котеджному містечку Goodlife Park справжня знахідка для любителів життя у лісі з колом однодумців. Перед нами було поставлено багато задач, де ми мали поєднати концепт котеджного містечка і водночас створити щось нове. Будинок має площу 395 кв.м та має два поверхи. Будинок вирізняється поєднанням різних матеріалів, які не вимагають певних правил та обмежень. А навпаки - створюють певну свободу. Будинок має фасад з натурального каменю, дерева і скла, що створює відчуття гармонії з природою.",
    overview: 'Будинок має великі панорамні вікна, що відкривають чудовий вид на ліс і гори. Всередині панує затишна і комфортна атмосфера. Інтер’єр виконаний у стилі можернізм. Завдяки великому простору окрім комфортної кухонної робочої зони ми ще розмістили острів та великий обідній стіл, де можна проводити сімейні вечори або приймати гостей. Особливу увагу приділили елементам інтер’єру, адже резиденти мають вишуканий смак і кожна деталь має приносити естетичне задоволення. Будинок має також вітальню, кабінет, чотири спальні, три ванні кімнати і гардеробні.',
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
    concept: "Будинок має площу 395 кв.м та два поверхи. При розробці дизайн проєкту особливу увагу приділили елементам інтер’єру, адже резиденти мають вишуканий смак і кожна деталь має приносити естетичне задоволення. Будинок має вітальню, кабінет, чотири спальні, три ванні кімнати і гардеробні.",
    overview: "Спальня з власною ванною та гардеробною – приміщення, що вражає гармонією та елегантністю. Інтер'єр розкривається в приємних тонах, створюючи атмосферу спокою та затишку. Стіни кімнати оздоблені дерев'яними рейками, які додають тепла і стильного вигляду. Колірна палітра базується на трьох основних кольорах: білому, бежевому та акцентному чорному. Велике вікно у ванній пропускає природне світло, заповнюючи приміщення свіжістю та дозволяючи насолоджуватися чудовим видом навколишнього ландшафту.",
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
    concept: "Це наш один з найулюбленіших проєктів, які ми реалізували від концепції до реалізації, від архітектури до маленькою дрібнички в кожній кімнаті. Цей дизайн інтер’єру кухні-вітальні від ASTY виглядає сучасним і мінімалістичним, але при цьому затишним і функціональним. Кухня має необхідну вбудовану техніку. Підлога розділена на дві частини і в робочій зоні викладена плитка, а основна зона виконана зі світлого дерева, що створює контраст і підкреслює різні функції простору.",
    overview: 'Висока стеля візуально збільшує приміщення і дає можливість використати різні варіації освітлення, такі як вбудовані світильники, підвісні лампи, настільні лампи та свічки, що створюють різні настрої і атмосфери. У зоні вітальні ми розмістили великий обіденний стіл для святкувань сімейних свят або проведення зустрічей.',
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
    concept: "Сучасна та мінімалістична спальна кімната - це приклад гармонійного поєднання функціональності та стилю. Кімната має нейтральну колірну палітру, яка створює атмосферу спокою та релаксації. Чисті лінії та природні матеріали, такі як дерево та камінь, підкреслюють сучасність та екологічність інтер’єру. Велике зручне ліжко сірого кольору та світла деревяна підлога додають затишку та комфорту.",
    overview: 'Освітлення виконано уздовж всієї стелі, що візуально робить кімнату більш довгою та просторою. А на стіні ми бачимо абстрактне полотно, яке доповнює весь інтер’єр своїми яскравими барвами та динамічними формами. Також є крісло-стілець, яке може слугувати як місце для читання або відпочинку, та красиві елементи декору, такі як вази, свічки  та книги, які надають кімнаті особливого шарму та індивідуальності.',
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
    concept: "В цьому будинку продумано все до найменших дрібниць - функціональність, практичність та стиль. Мінімалізм у всьому - починаючи від архітектури та закінчуючи маленькими деталями в інтер’єрі. Ми використали дерево як основний акцент у зоні передпокою та кабінеті, і цим підкреслили елегантність та вишуканість інтерʼєру та підтримали цілісність дизайну у всьому будинку. Дерево додає теплоти та затишку та контрастує з білими стінами та металевими деталями.",
    overview: 'Особливу увагу хочемо звернути на вітальну, де ми використали гарну підвісну люстру, яка створює чудовий світловий ефект на стелі. Великі панорамні вікна, які займають майже всю стіну, дозволяють проникати природному світлу та відкривають захоплюючий вид на ліс. Диван для зустрічей, який розташований біля вікна, створює зручну зону для спілкування та відпочинку. Сходи на 2 поверх візуально розширюють простір та додають динаміки.',
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
    concept: "Кімната для маленького дослідника, який захоплюється космосом. Розробляючи дизайн ми додатково вивчили різновидність зірок, галактик та планет, щоб створити космічний світ за всіма правилами, де малюк зміг відчути себе справжнім астрономом. На основну стіну наклеїли велику карту сонячної системи, яка показує назви та розміри планет. Біля вікна розмістили місце для навчання, де є стіл, стілець, комп’ютер та телескоп, за допомогою якого можна спостерігати за небесними тілами.",
    overview: 'Другою головною задачею було створення функціональних полиць для зберігання улюблених іграшок, серед яких є ракети, космічні кораблі, астронавти та інопланетяни. Кімната, в якій можна відчути себе часткою безкінечного космосу та насолоджуватись мрією про подорожі на інші планети.',
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
    concept: "Тераса - це місце сили, місце спокою, місце натхнення. Кожен куточок можна зробити унікальним та ідеально пристосованим до стилю життя та потреб. Для підлоги була обрана дошка з натурального дерева покрита спеціальною фарбою, яка зберігає природний колір та текстуру для забезпечення довговічності та додатковий захист. Для декору ми використали рослини, які прикрашають терасу своїми зеленими листками та квітами, а також очищають повітря та знижують температуру. Рослини також створюють відчуття близькості до природи та релаксації.",
    overview: 'Для освітлення ми встановили лампи, які розсіюють м’яке та приємне світло, а також створюють романтичну атмосферу. Лампи також допомагають виділити окремі зони на терасі та зробити її більш затишною та зручною. Ця тераса - це місце, де можна насолоджуватися красою та спокоєм, а також проводити час з рідними та друзями. Це місце, яке відображає індивідуальність та смак власників, а також їхнє бажання жити в гармонії з собою та оточенням.',
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