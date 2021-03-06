module.exports = {
  async up(db, client) {
    await db.dropCollection("usefull_messages");
    const usefullMessages = await db.createCollection("usefull_messages");
    await usefullMessages.insertMany([
      {
        isUsed: false,
        text: `ПОЧЕМУ В МОЕМ РАЦИОНЕ ПИТАНИЯ НИКОГДА НЕТ СУПОВ? \n\nПочему я говорю всем своим клиентам,  всем своим марафонцам, что суп - это вредно?\n\nЕсли говорить простыми словами, то суп - это жидки гамбургер. А все мы знаем, как «полезны» гамбургеры.\n\nНачнём с начала, с истории супа. \nСуп в основном существует на постсоветском пространстве начиная с 16 века. Это не значит, что в других культурах нет подобных блюд, но именно на постсоветском пространстве огромное разнообразие жидких блюд. Почему так? \nСуп стал блюдом бедных или больших семей. Там где было достаточно мало пищи и была она на вес золота, а в семьях было, скажем так, многолюдно, суп был отличным решением всех этих проблем.\n\nЧто такое суп? \nЭто вода, в которой растворен жир от какой-либо кости и по сути это и есть трансжиры. А далее: одна картофелина, одна луковица и одна морковка. И из всего этого получается огромная кастрюля супа, которой можно накормить всю семью, но и которая разъедает желудке изнутри.\n\nПочему он так плохо действует на желудок? \nТрансжиры - самое вредная разновидность ненасыщенных жиров. Мы все слышали, что их большое количество в гамбургерах, картошка фри и тд. Эти же трансжиры заполняют всю вожу супа после варки кости или жирного мяса.\n\nМы можем его лицезреть и даже потрогать. Вспомните тот самый жир, который плавает сверху после того, как остывает суп, это и есть те самые трансжиры.\n\nСуп действительно нас насыщает, но задумайтесь, после него вновь очень хочется есть. Как и после посещения Макдональдса. Потому что в подобной пиши нет никаких полезных веществ. Что касается супа, то он быстро заполняет желудок водой, из-за  чего чувство голода притупляется, но достаточно быстро вы вновь хотите есть. И при этом сахар в крови уже скачет и скачет, а вы не понимаете почему тянетесь за очередным перекусом.\n\nЕщё один факт против супа, что в нём нет никаких полезных макро и микро элементов. Все полезные вещества просто вывариваются при длительном кипячении. \n\nИз этого можно сделать вывод: что суп - это пустая пища, которая ещё и вредит нашему организму. \n\nКогда нам наши бабушки или родители говорят что надо есть суп, потому что в рационе должно быть что-нибудь горяченькое лучше выпить горяченького чая. Вреда будет намного меньше;) \n\nЕсли же вы не можете отказаться от супов. Остановите свой выбор на овощных бульонах или супах-пюре без добавления сливок или же сурах восточной кухни. Второе не в период похудения;) \n\nВсем приятного аппетита 😋 `,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isUsed: false,
        text: `СУХОЙ МАССАЖ: ДА ИЛИ НЕТ?! \n\nЕсли это вопрос эстетической красоты и упругости кожи, однозначно ДА!\nЕсли убрать целлюлит не отказываясь от любимых конфет, 100% НЕТ!\n\nЧто даёт сухой массаж. Если простыми слова, то приток крови, от чего клетки обновляются быстрее, а кожа становится более упругой.\nРезультат действительно заметный и значительный, но при регулярном использовании щетки. \n\nПомните, любые действия усиливают эффект, если выполнять их в комплексе: правильное, сбалансированное питание + физ.нагрузки + питьевой режим + сухой массаж = красивая подтянутая кожа!\n\nА так же стоит помнить, что:\n✅сухой массаж делается всегда на сухую кожу\n✅движения снизу-вверх\n✅круговые движения в области ягодиц и живота. Чередовать направления\n✅начинаем  массаж снизу. То есть с области ног.\n\nВыбирать щетку ОБЯЗАТЕЛЬНО с натуральной щетиной, какая будет ручка, длинная или короткая, зависит исключено от ваших предпочтений;)`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isUsed: false,
        text: `ЖЕНЩИНАМИ УПРАВЛЯЮТ ГОРМОНЫ!\n\nНастроение переменчивое, прям, как погода за окном.. Почему? Все очень просто - гормоны😁\n\nТема важная: изменения нашего настроения/состояния в различные фазы цикла и то, как это все влияет на тренировочный процесс.\n\n✅1 ФАЗА (1-5 дней)\nПадает уровень прогестерона, эстроген и тестостерон повышаются, улучшается самочувствие. Чувство постоянного голода пропадает.\n\nТренировки.\nВы можете повышать интенсивность тренировок, продуктивно работать в силовых упражнениях, благодаря высокому уровню тестостерона. Если в 1-3 день вы чувствуете слабость, то делайте лёгкую тренировку, а нормально тренироваться начинайте на 4-5 день.\n\n✅2 ФАЗА (6-14 дней)\nУровни эстрогена/тестостерона и гормонов гипофиза достигает своего пика.\nТренировки.\nЭто самая продуктивная тренировочная неделя из всего цикла в целом.\n\n✅3 ФАЗА (15-23 дни)\nУровень эстрогенов понижается, вы чувствуете повышенную раздражительность. Уровень прогестерона повышается, вы будете уставать сильнее и быстрее. Уровень тестостерона понижается, может задерживаться вода.\n\nТренировки.\nИнтенсивность тренировок стоит начать снижать. Тренируйтесь в силовом режиме, можно увеличить время отдыха между подходами.\n\n✅4 ФАЗА (24-28 дней)\n\nНачинается ПМС. Уровень прогестерона падает, достигая перед этим своего пика, может быть небольшая отечность/повышение температуры тела. Постоянное чувство голода.\n\nТренировки.\nВысокоинтенсивные тренировки лучше не проводить.\n\nИ да, гормоны правят не только нашими силовыми показателями и продуктивностью, но и настроением, чувством голода, эмоциональности и тд.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isUsed: false,
        text: `ЖИРЫ НЕОБХОДИМЫ ОРГАНИЗМУ!\n\nНи в коем случае нельзя обходить стороной продукты, в которых есть жиры!\n\nНе стоит бояться ЖИРОВ, как огня!\n\nБезжировые диеты опасны для организма.❌\nВы должны знать:\n✅какие бывают жиры\n✅какие жиры можно и нужно есть.\n\n❗️Ненасыщенные жиры.\nДля нормальной жизнедеятельности организму необходимы омега-3, омега-6, омега-9 кислоты.\nОни:\n✅снижают уровень холестерина,\n✅придают сосудам эластичность,\n✅улучшают качество кожи,\n✅ускоряют восстановление костной ткани,\n✅улучшают состояние суставов.\n\nПри недостатке омега-3:\n🚫замедляется рост,\n🚫ухудшается зрение,\n🚫появляется мышечная слабость.\n\nНедостаток омега-6 приводит к:\n🚫выпадению волос,\n🚫ухудшению эластичности кожи.\n\nМало омега-9:\n🚫нет жизненных сил,\n🚫ломкие ногти,\n🚫женское здоровье ухудшается.\n\nЧто нужно делать?\nВключи в рацион морепродукты, семечки, орехи, бобовые, авокадо, растительные масла.\n\n‼️Насыщенные жиры.\nОстерегайся их и контролируй их употребление.\n\nОни:\n❌снижают чувствительность к холестерину,\n❌способствуют образованию тромбов в кровеносных сосудах,\n❌увеличивают риск диабета,\n❌ослабляют иммунитет.\n\nПрисутствуют в сливочном масле, сале, жирном мясе.\n\n❌Транс-жиры — имеют не самое полезное влияние на организм, хотя производятся на основе полезных ненасыщенных жиров.\n\nОни входят в состав маргарина, спреда, кулинарных жиров, майонеза. Их употребление нужно снизить до минимума.\nЖиры полезны! Просто необходимо знай меру в их употреблении!`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isUsed: false,
        text: `Диастаз и тренировки.\nМожно или нельзя?\n\nДиастаз – это расхождение мышц живота. Для тех, у кого наблюдается данное заболевания действительно существует несколько запретов на тренировки.\n\nДиастаз может возникать не только после беременности, но и при резком скачке веса или продолжительных тренировках с максимальной нагрузкой.\n\nЕсли у вас есть диастаз, это не значит, что вы не сможете стать обладателем плоского и красивого живота. Что бы осуществить данной желание можно и нужно выполнять следующие упражнения:\n\n✅ Втягиваем живот.\nДержим мышцы пресса всегда в тонусе. Внимательное осознанное дыхание — главное и самое простое решение проблемы.\n\n✅ Пульсирующие движения животом.\nМожно делать где и когда угодно. На выдохе силой втягивай живот, на вдохе — расслабляй.\n\n✅ Вакуум.\nУпражнение выполняется натощак, утром, сразу после пробуждения. Из положения стоя, стоя с опорой ладоней на бёдра, стоя на четвереньках или лёжа на спине, сделай вдох. Затем форсированный выдох и ещё один «довыдох», чтобы вытолкнуть весь воздух. Теперь втягивай живот так, будто хотите прижать его к позвоночнику. Задерживаем на максимальное количество времени. Вдыхаем. Один круг привычных вдоха и выдоха. И делаем несколько таких подходов.\n\n✅ Упражнение «Кошка».\nВстаём на четвереньки. Выполняем прогиб на вдохе и скругление на выдохе. Контролируем мышцы живота в каждом движении.\n\n✅ Упражнение «Скручивания».\nЛежа на полу. Колени подсогнуты. Поворачиваем голову в одну сторону, а согнутые в коленях ноги — в противоположную. Задерживаемся в этом положении на несколько счётов, и делаем то же самое на другую сторону.\n\n✅ Вариация упражнения «Велосипед».\nЛёжа на спине, согните колени и оторвите стопы от пола не несколько см. Колени точно над тазом. На выдохе медленно опустите одну ногу на пол, на вдохе — верни в исходное положение. Выполняйте поочередно с каждой ногой.\n\n🍏 ПИТАНИЕ. Сбалансированный рацион — лучший друг красивого живота.\n\При диастазе это правило работает вдвойне. Включайте в рацион больше белковой пищи и клетчатки (овощи, медленные углеводы). Научитесь самостоятельно составлять рацион питания, чтобы есть вкусно и быть стройной. С этим я вам помогу в этом марафоне😉\n\nБереги себя и своё здоровье.🙏🏻`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isUsed: false,
        text: `АЛКОГОЛЬ И ПОХУДЕНИЕ – РЕАЛЬНО?\n\nДля начала стоит немного узнать о самом алкоголе:\n\n✔️он калориен и в нем напрочь отсутствуют питательные вещества. То есть, вы пьёте жидкие калории, остаетесь голодными и аппетит ваш только усиливается\n✔️он токсичен. Блокирует окисление жиров и белковый синтез. Переваривание съеденных БЖУ не происходит до тех пор, пока из организма не выведется алкоголь. А этот процесс занимает 8-12 часов. А все, чем вы этот самый алкоголь закусываете, уходит в жир\n✔️отеки. Лишняя вода задерживается в организме из-за обезвоживания и не покидает его 3-5 дней.\n✔️он снижает выработку тестостерона. А он необходим для похудения. Алкоголь подавляет его секрецию и способствует затруднению сжигания жира.\n✔️он нагружает почки и печень\n\nЯ не советуем употреблять алкоголь. Но понимаем, что бывают поводы, когда без него никуда. И вот вам несколько советов:\n\n✅Выбирайте алкоголь с низкой калорийностью и содержанием углеводов. Например, сухое вино или шампанское Брют. 1-2 бокала не нанесут вреда, если это не ежедневно\n✅Хорошо поешьте перед употреблением алкоголя, чтобы не усиливалось чувство голода. Алкоголь снижает уровень сахара в крови и за счёт этого может усиливать аппетит.\n✅Пейте воду до и в процессе употребления алкоголя. Можно разбавлять вино минеральной водой 1 к 1.\n✅Не запивайте алкоголь сладкой водой, соками и газировкой. Закуски выбирай легкие, низкокалорийные. Это овощи, легкая белковая пища (мясо, птица, рыба).\n✅Старайтесь вписать алкоголь в дневную норму калорий.\n\nИ во всем соблюдайте меру!`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isUsed: false,
        text: `Глютен: за или против.\n\nГлютен - это белок, который содержится в злаковых.\nОн придает клейкость и пышность мучным изделиям, а по его содержанию определяется качество муки.\n\nСейчас повсюду можно услышать о вреде «клейковины». Практически в каждом магазине есть полка с продуктами «без глютена». Но в основном такие новшества в питании - всего лишь маркетинговый ход.\n\nМодное движение отказа от злаковых дошло чуть ли не до массовой эпидемии. Но стоит ли так резко реагировать на глютен?\nСтоит ли придерживаться безглютеновой диеты?\n\n✅У здоровых людей глютен усваивается нормально.\n✔️У больных целиакией глютен вызывает иммунную реакцию в тонком кишечнике. Распространенность этого заболевания около 1-2% во всем мире.\n\nЕсли вы наблюдаете у себя симптомы целиакии после употребления хлебобулочных изделий, следует обратиться к врачу.\nКстати, аллергия на пшеницу может давать похожие симптомы.\n\n✅Зачастую болезненные симптомы вызываются проблемой с перевариванием углеводов, и это не смертельно. Но во всем почему-то обвиняют «ядовитый» глютен.\n✔️Некоторые хлебобулочные производители добавляют дополнительную дозу глютена для придания своим изделиям «хруста» и пышности.\n\nЕсть мнение, что повышенная доза глютена вызывает симптомы, очень похожие на целиакию.\nНо и у этой гипотезы пока нет точного подтверждения.\n\n✅В Азии например глютен в чистом виде употребляется в пищу. Он стал заменой мясу и тофу и подаётся разными способами приготовления.\n✔️Люди ставят себе диагнозы и покупают продукты с заменителями.\nНо чаще всего мука заменяется на крахмалы, которые являются рафинированными углеводами и резко повышают уровень сахара в крови.\n\nВ итоге диета получается без глютена, но с высоким содержанием рафинированных углеводов.\n\nЧто же делать?\n\n✅ Не поддавайтесь панике и не занимайтесь самовнушением.\n✅ Не путайте отказ от мучного в целях похудения, улучшения самочувствия и отказ от глютена.\n✅ Употребляйте хлебобулочные изделия в меру.\n`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isUsed: false,
        text: `На дворе XXI век, а тайна воды ещё до конца не раскрыта учёными.\nИзвестно только одно - для человека она гораздо нужнее, чем пища.\nЕсли без еды можно продержаться до 30 дней, то без воды погибнем уже на пятые сутки.\n\nВ чём же польза воды для организма человека?\n\n✅Выступает в качестве наполнителя. За счёт неё поддерживается внешний вид и форма человека, а также некоторых его органов.\n\n✅Растворяет поступившие с пищей витамины, минералы и микроэлементы.\n\n✅Выполняет транспортную функцию. Вода поставляет полезные вещества клеткам, не допуская тем самым их голодание и гибель.\n\n✅Является регулятором температуры. Чтобы защитить организм от перегрева в жаркие летние дни, вода выходит наружу в виде пота и охлаждает наше тело.\n\n✅Играет роль фильтра. Растворяет и выводит с потом и мочой шлаки и токсины.\n\nЧтобы не нарушился водный баланс организма, нужно ежедневно пить достаточное количество воды. В противном случае может наступить обезвоживание разной степени.\n\nДля тех кто забывает пить воду, есть отличные помощники-приложения на телефон\n\nСамые популярные которые я нашла в аппсторе - это моявода и waterbalance.\nС их помощью вы сможете рассчитать необходимое количество вам воды в сутки,выставить напоминания и следить за состоянием своего организма\n\nТак же всегда совету своим клиентам купить красивую бутылочку и поставить  на свой рабочий стол или всегда носить с собой. Очень помогает;)`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isUsed: false,
        text: `​​МОЖНО ЛИ ДОВЕРЯТЬ СЧЁТЧИКАМ КАЛОРИЙ НА ТРЕНАЖЁРАХ?\n\nСадиться на велотренажёр, смотреть на минус калорий и представлять как вы становитесь все худее и спортивнее действительно круто, но насколько эти данные соответствуют действительности?\n\nВ то время как час интенсивного занятия на тренажёре может показать на экране минус два сникерса (1000 калорий), наука ставит под сомнения такие быстрые результаты.\n\nБольшинство машин, на которых вы занимаетесь в зале, откалибровано для людей, которые весят больше среднестатистического человека. Поэтому часто показатели сожженных калорий могут быть завышены.\n\nДля наглядности: за 30 минут 50 килограммовая девушка может сжечь примерно 100 калорий при ходьбе со скоростью 5 километров в час. В то же время, будь на её месте девушка побольше - допустим 90 кг, она бы избавилась от 160+ калорий.\n\nЕщё одним фактором, который поможет вам сжигать больше калорий, является мышечная масса. Чем её больше - тем быстрее вы будете расходовать калории.\n\nТо есть даже если вы 50 килограмовая девушка, но с относительно большим процентом мышечной массы - возможно вы будете сжигать больше калорий, чем я указала на примере выше.\n\n`,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(db, client) {
    db.dropCollection("usefull_messages");
  },
};
