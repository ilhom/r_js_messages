var help_messages = {
  1: 'Введите название вашего ресторана',
  2: 'Выберите часовой пояс вашего ресторана',
  3: 'Последняя синхронизация:',
  4: 'закрыть подсказку',
  5: 'Идет обнуление складов!',
  6: 'В накладной есть поля с нулевым значением! Сохранить?',

  'help_1': {
    title: 'Название ресторана',
    text: 'Укажите название Вашего нового ресторана, это необходимо для идентификации Вашего ресторана в системе.'
  },
  'help_2': {
    title: 'Часовой пояс',
    text: 'Выберите из списка часовой пояс Вашего города, где расположен Ваш ресторан, например для Москвы (GMT + 03:00), это необходимо для правильного отображения времени и даты в отчетах и счетах ресторана.'
  },
  'help_stocks_title': {
    title: 'Склады ресторана',
    text: 'Здесь отображается список складов в вашем ресторане. Складом в программе принимается место где происходит складирование и учет продуктов (ингредиентов). Именно относительно склада вы будете в дальнейшем получать отчетность по движению продуктов (приход, расход и текущий остаток), а так же проводить инвентаризацию. Склады вы можете создавать по вашему усмотрению столько сколько необходимо. В типовой конфигурации присутствуют обычно два склада - это склад "Бар" где ответственность за барную продукцию несет Бармен, и склад "Кухня" где ответственность несет Шеф повар. Соответственно при организации более сложной структуры вы можете создать еще склады, например склад "Кондитерская" либо склад "Пицца", либо склад "Шашлык". Любое место хранения продуктов которые необходимо учитывать отдельно, будет называться складом.<a href="https://www.jowi.club/ru/help.php" target="_blank">Подробнее о складах</a>'
  },
  'help_stocks_form_title': {
    title: 'Наименование склада',
    text: 'Укажите наименование склада, например “Кухня”'
  },
  'help_departments_title': {
    title: 'Отделы ресторана',
    text: 'Отделы - это таблица условленных для вашего ресторана разделов где происходит выдача готовой продукции и стоит термо-принтер. Стандартными отделами для ресторана являются "Бар" и "Кухня". К каждому отделу привязывается один из созданных вами ранее складов, с которого будут списываться исходные ингредиенты. У одного склада может быть несколько отделов.<a href="https://www.jowi.club/ru/starting_manual_web.php#areas” target="_blank">Подробнее об отделах</a>'
  },
  'help_departments_form_title': {
    title: 'Наименование отдела',
    text: 'Укажите наименование отдела, например “Бар”'
  },
  'help_departments_form_stock': {
    title: 'Привязка склада к отделу',
    text: 'Укажите наименование склада, который будет привязан к данному отделу, это будет означать что при выборе данного отдела, все ингредиенты будут списываться с привязанного склада. К одному складу можно привязать множество отделов.'
  },
  'help_bills_sum_by_day': {
    title: 'График суммы счетов',
    text: 'Данный график отображает общую сумму всех счетов по дням за последнее время.'
  },
  'help_bills_count_by_day': {
    title: 'График количества счетов',
    text: 'Данный график отображает общее количество всех счетов по дням за последнее время.'
  },
  'help_sync_title': {
    title: 'Параметры синхронизации',
    text: 'Информационное сообщение, которое отображает когда последний раз был осуществлен сеанс загрузки данных из локальной части в веб часть и обратно.'
  },
  'help_total_day_departments': {
    title: 'Краткий отчет по отделам',
    text: 'Данный отчет отображает суммы проданных блюд в зависимости от отделов'
  },
  'help_categories_title_text': {
    title: 'Категории блюд ресторана',
    text: 'Категории - это условленный подраздел меню вашего ресторана. Обычно, соответствует разделам печатного меню косоротое подается гостю в Вашем ресторане, например “Первые блюда”, “Напитки”, “Гарниры”, “Блюда из курицы” и прочее.<a href="https://www.jowi.club/ru/starting_manual_web.php#areas” target="_blank">Подробнее о категориях</a>'
  },
  'help_categories_button_color': {
    title: 'Цвет кнопки в категориях',
    text: 'Укажите цвет кнопки для каждой категории блюд, это облегчит визуальный поиск, когда официант добавляет блюда к счету.'
  },
  'help_categories_text_color': {
    title: 'Цвет текста в категориях',
    text: 'Укажите цвет текста у кнопки для каждой категории блюд, желательно делать его наиболее контрастным для лучшего визуального восприятия.'
  },
  'help_categories_text_size': {
    title: 'Размер текста в категориях',
    text: 'Укажите размер текста на кнопках категорий, для коротких названий можно использовать более крупный текст, для длинных названий меньшего размера, это еще более улучшит восприятие кнопки для быстрого поиска.'
  },
  'help_categories_form_title': {
    title: 'Наименование категории',
    text: 'Укажите наименование категории, например “Вторые блюда”.'
  },
  'help_categories_form_department': {
    title: 'Привязка отдела к категории',
    text: 'Укажите наименование отдела, который будет привязан к данной категории.'
  },
  'help_groups_title': {
    title: 'Группы ингредиентов',
    text: 'Группа ингредиентов - это вид подраздела, созданный для ингредиентов, это нужно для удобства сортировки или фильтрации по ингредиентам. Не обязательный параметр. При удалении группы ингредиентов, ингредиенты которые были привязаны к этой группе, не удалятся, а просто станут без группы.'
  },
  'help_groups_form_title': {
    title: 'Наименование группы ингредиентов',
    text: 'Укажите наименование группы ингредиентов, например “Молочные продукты”,”Мясо и копчености”,“Консервы”.'
  },
  'help_ingredients_title': {
    title: 'Список ингредиентов',
    text: 'Список ингредиентов - это список исходных продуктов, которые используются в вашем ресторане и по которым будет вестись в дальнейшем учет.<a href="https://www.jowi.club/ru/starting_manual_web.php#areas” target="_blank">Подробнее об ингредиентах</a>'
  },
  'help_ingredients_courses': {
    title: 'Блюда с ингредиентом',
    text: 'Здесь показаны блюда, в которых участвует данный ингредиент, и его количество'
  },
  'help_ingredients_form_title': {
    title: 'Наименование ингредиента',
    text: 'Укажите название ингредиента, например “картофель”.'
  },
  'help_ingredients_form_unit': {
    title: 'Ед. измерения ингредиента',
    text: 'Укажите из списка ед. измерения ингредиента, если необходимо добавить новую ед.измерения, зайдите в настройки.'
  },
  'help_ingredients_form_group': {
    title: 'Группа ингредиента',
    text: 'Укажите группу для данного ингредиента.Либо оставьте пустым, в этом случае ингредиент создастся без группы.'
  },
  'help_ingredients_form_price': {
    title: 'Цена ингредиента',
    text: 'Укажите цену для данного ингредиента, за ед.измерения. Эта цена будет называться ценой по-умолчанию и будет использоваться для предварительного расчета себестоимости блюда, в ситуации когда еще не приходывались продукты на склад и нет возможности указать цену по-накладной.'
  },
  'help_consistance_ingredients_title': {
    title: 'Список составных ингредиентов',
    text: 'Составной ингредиент - это по-сути полуфабрикат, либо блюдо, но используемое как часть готового блюда. Например соус или бульон.Составной ингредиент - необходимо использовать в том случае, когда в блюде помимо простого ингредиента используются ингредиенты состоящие из других простых ингредиентов. При добавлении нового составного ингредиента, необходимо из левой части меню, переносить в среднюю часть ингредиенты, которые входят в калькуляционную карту составного ингредиента.<a href="https://www.jowi.club/ru/starting_manual_web.php#areas” target="_blank">Подробнее о составных ингредиентах</a>'
  },
  'help_consistance_ingredients_form_title': {
    title: 'Наименование составного ингредиента',
    text: 'Укажите наименование составного ингредиента, например “Соус Сальса 1кг”.'
  },
  'help_consistance_ingredients_form_unit': {
    title: 'Ед.измерения составного ингредиента',
    text: 'Укажите из списка ед.измерения составного ингредиента.Обычно составные ингредиенты рассчитываются на 1 литр, либо на 30 порций или 100 шт (блинов например).'
  },
  'help_consistance_ingredients_form_count': {
    title: 'Расчетное кол-во составного ингредиента',
    text: 'Укажите кол-во составного ингредиента на которое будет составлена калькуляционная карта.'
  },
  'help_consistance_ingredients_form_group': {
    title: 'Группа составного ингредиента',
    text: 'Укажите группу составного ингредиента. Либо оставьте пустым, в этом случае составной ингредиент создастся без группы.'
  },
  'help_courses_title': {
    title: 'Список блюд ресторана',
    text: 'Блюда в ресторане являются основной торговой единицей, которые в своем составе имеют набор ингредиентов и составных ингредиентов с указанием их количества брутто.<a href="https://www.jowi.club/ru/starting_manual_web.php#areas” target="_blank">Подробнее о блюдах</a>'
  },
  'help_courses_form_title': {
    title: 'Наименование блюда',
    text: 'Укажите наименование блюда, например “Баранина в корзинке с овощами на гриле”.'
  },
  'help_courses_form_category': {
    title: 'Категория блюда',
    text: 'Укажите из списка к какой категории будет относиться данное блюдо. Это будет облегчать работу официанта при поиске данного блюда в  интерфейса для официанта.'
  },
  'help_courses_form_price': {
    title: 'Цена блюда',
    text: 'Укажите продажную цену блюда за порцию.'
  },
  'help_courses_form_button_color': {
    title: 'Цвет кнопки блюда',
    text: 'Укажите цвет кнопки для данного блюда, это облегчит визуальный поиск, когда официант добавляет блюдо к счету.'
  },
  'help_courses_form_text_color': {
    title: 'Цвет текста блюда',
    text: 'Укажите цвет текста у кнопки для данного блюда, желательно делать его наиболее контрастным для лучшего визуального восприятия.'
  },
  'help_courses_form_text_size': {
    title: 'Размер текста блюда',
    text: 'Укажите размер текста на кнопке для данного блюда, для коротких названий можно использовать более крупный текст, для длинных названий меньшего размера, это еще более улучшит восприятие кнопки для быстрого поиска.'
  },
  'help_courses_form_is_visible': {
    title: 'Видимость блюда',
    text: 'Данный параметр влияет на видимость блюда в интерфейсе официанта, если головка стоит, значит блюдо видимо, если убрать галочку, до через некоторое время при наличии синхронизации с локальным модулем в ресторане, данное блюдо исчезнет из меню официанта.'
  },
  'help_courses_form_is_piece': {
    title: 'Количественный ввод для блюда',
    text: 'Данный параметр влияет на то как будет продаваться блюдо. Если блюдо продается в неизменном виде согласно калькуляционной карте, то нужно поставить галочку, и указать что данное блюдо штучное, т.е неделимое. </br>Если необходимо продавать данное блюдо порционно, это когда официант самостоятельно имеет возможность указать количество продаваемого блюда, например 250 грамм “Салата Оливье”, или 150 мл “Ликера”, то в этом случае нужно галочку убрать. Но нужно понимать что для подобных типов блюд калькуляционную карту нужно указывать из расчета на 1000 ед.измерения. Например на 1 кг или на 1 литр или 1000 мл. В том числе и продажную цену за 1 кг или 1 литр.  '
  },
  'help_courses_form_selected_ingredients': {
    title: 'Калькуляционная карта с ингредиентами',
    text: 'В данном окне отображаются ингредиенты из которых состоит данное блюдо.Ингредиенты нужно перетаскивать из списка ингредиентов либо копируя калькуляционную карту другого блюда, и затем дополнять ее. Количество ингредиента нужно указывать в брутто. В правом окне при нажатии кнопки “Рассчитать” программа рассчитает себестоимость блюда по приходным ценам из последней накладной которая приходила на склад за которым закреплено данное блюдо. '
  },
  'help_courses_form_callculate_table_header': {
    title: 'Расчет себестоимости блюда',
    text: 'В данном окне при нажатии кнопки “Рассчитать” программа рассчитает себестоимость блюда по приходным ценам из последних накладных которые содержали данные ингредиенты и приходили на склад за которым закреплено данное блюдо. Так же произведет расчет прибыли и наценки на данное блюдо'
  },
  'help_course_courses_title': {
    title: 'Список связанных друг с другом блюд',
    text: 'Связанные блюда - это новый функционал программы. Здесь вы можете выбрать одно любое блюдо из вашего меню, и привязать к нему другое любое блюдо из меню. Таким образом между ними установится связь. Что это даст? Это отражается только в интерфейсе официанта. Например Вы продаете блюдо “Гамбургер” и знаете что с ним часто заказывают другие блюда, например “Картошка фри” или “Кока-Кола 0.5”. Вы можете здесь выбрать основное блюдо “Гамбургер” и к нему привязать два блюда “Картошка фри” и “Кока-Кола 0.5”. Теперь когда официант выберет “Гамбургер”, то программа автоматически предложит добавить два связанных блюда второе. Это ускоряет работу официанта и делает работу удобной. Официанту не придется выходить из одной категории меню и переходить в другую. Он сможет сразу в одном месте пробить все необходимое. С одним блюдом можно связать до 10 других блюд.<br/> Тем не менее это не означает что связь теперь будет работать и в другую сторону. Если выбрать “Картошку фри”, то “Гамбургер” автоматически не предложиться программой, для этого необходимо установить новую связь с главным блюдом “Картошка фри”.'
  },
  'help_course_courses_form_title': {
    title: "Укажите основное блюдо для настройки связи",
    text: "Например это может быть “Говяжья котлета”, а к этому блюду обычно предлагается гарнир “Дикий рис” или “Картофельное пюре”. Для того, чтобы у официанта при выборе блюда “Говяжья котлета” автоматически предлагались другие блюда, необходимо:<br/>1. Выбрать основное блюдо (начните набирать первые буквы названия)<br/>2. В нижнем окне укажите те блюда с которыми нужно установить связь<br/>3. Перенесите указанные блюда в окно справа (нажав на стрелочку вправо)<br/>4. Сохраните сделанную настройку, нажав на кнопку “Создать”"
  },
  'help_course_courses_form_selected_courses': {
    title: 'Список привязанных блюд к основному блюду',
    text: "Список внизу показывает какие блюда будут предлагаться к основному блюду, автоматически в интерфейсе официанта.<br/>Привязанных блюд не может быть больше 10.<br/>Данный список можно отредактировать в любое время."
  },
  'help_modifiers_title': {
    title: 'Модификаторы',
    text: "Модификаторы  - это комментарии к блюду. Модификаторы отображаются рядом с блюдом при добавлении любого блюда к счету,  во время отправки блюда на кухню или в бар. Печатается либо при печати заказа на кухню или другой отдел, либо показывается на мониторе повара или бармена. Данный тип комментария помогает точнее определить предпочтения клиента в приготовлении блюда, либо как именно нужно приготовить именно эту порцию блюда или напитка. <br/>Для примера наиболее частые в употреблении модификаторы:<br/>1. Не острое<br/>2. Не жирное<br/>3. Степень прожарки для стейков (medium, well, done …)<br/>4. Два в одном (2 в 1)<br/>5. Упаковка с собой<br/>Вы можете создать в общей сложность 24 модификатора. Кроме этого у официанта всегда есть возможность создать свой уникальный модификатор (сообщение повару), этот комментарий не сохраниться в системе и будет использован только конкретно к этому блюду. Для этого нужно нажать на кнопку “Новый”.<br/>Модификаторы не печатаются в итоговом счете, и видны только официанту и повару или бармену.<br/>Еще один способ использовать модификаторы, это указывать какой сок нужно налить. Допустим вы в системе ведете учет сока в литрах, и вам не важно какой именно сок расходуется, потому что цена у всех соков одна. Поэтому чтобы не загромождать меню можно создать одно блюдо “Сок”, а официант при выборе этого блюда, просто укажет в модификаторе какой именно сок нужен."
  },
  'help_modifiers_form_title': {
    title: 'Создайте новый модификатор блюда',
    text: 'Внесите нужный вам модификатор (комментарий) к блюду. Это удобство коммуникации между официантом и поваром. Это может быть любое предложение или группа слов.<br/>Например:<br/>1. Без льда<br/>2. Не холодное<br/>3. Лед отдельно<br/>4. Все раздельно<br/>5. Порядок приготовления 1<br/>Для создания напечатайте название и нажмите на кнопку “Создать”'

  },
  'help_cashboxes_incomes': {
    title: 'Все приходные статьи2',
    text: 'Здесь показываются все приходы и общая сумма по ним за текущий день. Отображается вся суммарная информация по всем кассам, если их в Вашем ресторане несколько. Если нет, то только касса по-умолчанию. Все приходы разделены по типу расчета. В кассу по умолчанию автоматически приходится все счета ресторана. Помимо этого здесь будут показываться другие приходы, которые вы проведете, в разделе “Транзакции” меню “Касса” если Вы ведете финансовый учет. Например такие как:<br/>1. Залог за банкет<br/>2. Предоплата на депозит<br/>3. Возврат остатка с закупа'
  },
  'help_cashboxes_expences': {
    title: 'Все расходные статьи',
    text: 'Здесь показываются все расходы и общая сумма по ним за текущий день. Отображается вся суммарная информация по всем кассам, если их в Вашем ресторане несколько. Если нет, то только касса по-умолчанию. Все расходы разделены по типу расчета. Вы можете вести финансовый учет в ресторане, указывая текущие расходы. Например такие как:<br/>1. Инкассация<br/>2. Заработная плата<br/>3. Аренда<br/>4. Уборка <br/>5. Выдано владельцу<br/>Все приходы и расходы добавляются как локально кассиром так и бухгалтером в разделе “Транзакции” меню “Касса”. Ниже показан итоговый краткий отчет по балансу всех касс за сегодняшний день.'
  }

};
