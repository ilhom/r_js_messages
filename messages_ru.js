var help_messages = {
  1: 'Введите название вашего ресторана',
  2: 'Выберите часовой пояс вашего ресторана',
  3: 'Последняя синхронизация:'
}

var login_validate_messages = {
  1: 'Введите E-mail',
  2: 'Введите пароль',
  3: 'Пароль должен быть длиной не менее 5 символов'
};


var notify_messages = {
    'member_created': {
      theme: 'notice',
      title: 'Создано!',
      message: 'Пользователь успешно создан.'
    },
    'member_not_created': {
      theme: 'error',
      title: 'Ошибка',
      message: 'Пользователь не сохранен!'
    },
    'member_not_updated': {
      theme: 'error',
      title: 'Ошибка!',
      message: 'Пользователь не сохранен!'
    },
    'member_updated': {
      theme: 'notice',
      title: '',
      message: 'Пользователь успешно обновлен.'
    },
    'stock_not_created': {
      theme: 'error',
      title: 'Ошибка',
      message: 'Склад не сохранен!'
    },
    'stock_created': {
      theme: 'notice',
      title: 'Создано!',
      message: 'Склад успешно создан.'
    },
    'stock_updated': {
      theme: 'notice',
      title: 'Сохранено!',
      message: 'Изменения склада сохранены.'
    },
    'stock_deleted': {
      theme: 'notice',
      title: 'Удалено!',
      message: 'Склады успешно удалены.'
    },
    'department_not_created': {
      theme: 'error',
      title: 'Ошибка!',
      message: 'Отдел не сохранен.'
    },
    'department_created': {
      theme: 'notice',
      title: 'Создано!',
      message: 'Отдел успешно создан.'
    },
    'department_update': {
      theme: 'notice',
      title: 'Сохранено!',
      message: 'Изменения отдела сохранены.'
    },
    'department_deleted': {
      theme: 'notice',
      title: 'Удалено!',
      message: 'Отделы успешно удалены.'
    },

    32: {
      theme: 'notice',
      title: '',
      message: 'Подождите идет сохранение категории...'
    },
    33: {
      theme: 'error',
      title: 'Ошибка',
      message: 'Категория не сохранена!'
    },
    34: {
      theme: 'notice',
      title: '',
      message: 'Категория успешно создана!'
    },
    35: {
      theme: 'notice',
      title: 'Сохранено!',
      message: 'Изменения категории сохранены'
    },
    36: {
      theme: 'notice',
      title: '',
      message: 'Подождите идет сохранение ингредиента...'
    },
    37: {
      theme: 'error',
      title: 'Ошибка',
      message: 'Ингредиент не сохранен!'
    },
    38: {
      theme: 'notice',
      title: '',
      message: 'Ингредиент успешно создан!'
    },
    39: {
      theme: 'notice',
      title: 'Сохранено!',
      message: 'Изменения ингредиента сохранены'
    },
    40: {
      theme: 'error',
      title: 'Ошибка',
      message: 'Ингредиент с таким артикулем уже существует'
    },
    41: {
      theme: 'notice',
      title: '',
      message: 'Подождите идет сохранение блюда...'
    },
    42: {
      theme: 'error',
      title: 'Ошибка',
      message: 'Блюдо не сохранено!'
    },
    43: {
      theme: 'notice',
      title: '',
      message: 'Блюдо успешно создано!'
    },
    44: {
      theme: 'notice',
      title: 'Сохранено!',
      message: 'Изменения блюда сохранены'
    },
    45: {
      theme: 'notice',
      title: '',
      message: 'Подождите идет сохранение группы...'
    },
    46: {
      theme: 'error',
      title: 'Ошибка',
      message: 'Группа не сохранена!'
    },
    47: {
      theme: 'notice',
      title: '',
      message: 'Группа успешно создана!'
    },
    48: {
      theme: 'notice',
      title: 'Сохранено!',
      message: 'Изменения группы сохранены'
    },
    49: {
      theme: 'notice',
      title: 'Удалено!',
      message: 'Блюда успешно удалены'
    },
    50: {
      theme: 'notice',
      title: 'Удалено!',
      message: 'Ингредиенты успешно удалены'
    },
    'invoice_not_created': {
      theme: 'error',
      title: 'Ошибка',
      message: 'Накладная не сохранена!'
    },
    'invoice_created': {
      theme: 'notice',
      title: '',
      message: 'Накладная успешно создана!'
    },
    'invoice_updated': {
      theme: 'notice',
      title: 'Сохранено!',
      message: 'Изменения накладной сохранены'
    },
    'invoice_not_updated': {
      theme: 'error',
      title: 'Ошибка!',
      message: 'Изменения накладной не сохранены.'
    },
    155: {
      theme: 'notice',
      title: 'Сохранено!',
      message: 'Категория меню успешно создана!'
    },
    156: {
      theme: 'error',
      title: 'Ошибка',
      message: 'Категория меню не сохранена!'
    },
    157: {
      theme: 'notice',
      title: 'Сохранено!',
      message: 'Изменения категории меню сохранены'
    },
    158: {
      theme: 'notice',
      title: 'Сохранено!',
      message: 'Блюдо для меню успешно создано!'
    },
    159: {
      theme: 'error',
      title: 'Ошибка',
      message: 'Блюдо для меню не сохранено!'
    },
    160: {
      theme: 'notice',
      title: 'Сохранено',
      message: 'Изменения блюда для меню сохранены'
    },
    161: {
      theme: 'error',
      title: 'Ошибка',
      message: 'Клиент не создан!'
    },
    162: {
      theme: 'notice',
      title: 'Сохранено',
      message: 'Клиент успешно создан!'
    },
    163: {
      theme: 'error',
      title: 'Ошибка',
      message: 'Изменения клиента не сохранены!'
    },
    164: {
      theme: 'notice',
      title: 'Сохранено',
      message: 'Изменения клиента сохранены!'
    },
    165: {
      theme: 'notice',
      title: 'Удалено',
      message: 'Клиенты успешно удалены!'
    },
    55: {
      theme: 'notice',
      title: '',
      message: 'Подождите идет сохранение списания...'
    },
    'write_off_not_created': {
      theme: 'error',
      title: 'Ошибка',
      message: 'Списания не сохранено!'
    },
    'write_off_created': {
      theme: 'notice',
      title: '',
      message: 'Списания успешно создана!'
    },
    58: {
      theme: 'notice',
      title: 'Сохранено!',
      message: 'Изменения списания сохранены'
    },
    59: {
      theme: 'notice',
      title: 'Удалено!',
      message: 'Списание успешно удалены!'
    },
    60: {
      theme: 'notice',
      title: 'Удалено!',
      message: 'Накладные успешно удалены!'
    },
    61: {
      theme: 'notice',
      title: '',
      message: 'Подождите идет сохранение перемещения...'
    },
    62: {
      theme: 'error',
      title: 'Ошибка',
      message: 'Перемещение не сохранено!'
    },
    63: {
      theme: 'notice',
      title: '',
      message: 'Перемещение успешно создана!'
    },
    64: {
      theme: 'notice',
      title: 'Сохранено!',
      message: 'Изменения перемещения сохранены'
    },
    65: {
      theme: 'notice',
      title: 'Удалено!',
      message: 'Перемещения успешно удалены!'
    },
    66: {
      theme: 'notice',
      title: 'Активировано',
      message: 'Калькуляция блюда активирована!'
    },
    67: {
      theme: 'notice',
      title: 'Активировано',
      message: 'Калькуляция составного ингредиента активирована!'
    },
    68: {
      theme: 'notice',
      title: 'Удалено!',
      message: 'Счета успешно удалены!'
    },
    69: {
      theme: 'notice',
      title: 'Удалено!',
      message: 'Инвентаризации успешно удалены!'
    },
    70: {
      theme: 'error',
      title: 'Ошибка',
      message: 'Инвентаризация не сохранено!'
    },
    71: {
      theme: 'notice',
      title: '',
      message: 'Инвентаризация успешно создана!'
    },
    72: {
      theme: 'notice',
      title: '',
      message: 'Накладная сохранена как черновик.'
    },
    73: {
      theme: 'notice',
      title: '',
      message: 'Счета успешно удалены!'
    },
    74: {
      theme: 'error',
      title: '',
      message: 'Соглашение не сохранено!'
    },
    75: {
      theme: 'notice',
      title: '',
      message: 'Соглашение сохранено и отправлено пользователю на почту!'
    },
    76: {
      theme: 'notice',
      title: '',
      message: 'Соглашение отклонено!'
    },
    77: {
      theme: 'notice',
      title: '',
      message: 'Соглашение принято!'
    },
    78: {
      theme: 'notice',
      title: '',
      message: 'Соглашение обновлено!'
    },
    79: {
      theme: 'notice',
      title: '',
      message: 'Соглашения успешно удалены!'
    },
    80: {
      theme: 'notice',
      title: '',
      message: 'Настройки обновлены!'
    },
    81: {
      theme: 'notice',
      title: '',
      message: 'Депозит клиента обновлен!'
    },
    82: {
      theme: 'notice',
      title: '',
      message: 'Обнуление базы данных запушено, через 1-40 минут завершится процес!'
    },
    83: {
      theme: 'notice',
      title: '',
      message: 'Обнуление складов успешно завершено!'
    },

    'local_user_not_created': {
      theme: 'error',
      title: 'Ошибка',
      message: 'Данные не сохранены!'
    },
    'local_user_created': {
      theme: 'notice',
      title: 'Создано!',
      message: 'Пользователь успешно создан.'
    },
    'local_user_updated': {
      theme: 'notice',
      title: 'Сохранено!',
      message: 'Данные пользователя изменены.'
    },
    'local_user_deleted': {
      theme: 'notice',
      title: 'Удалено!',
      message: 'Пользователь удален.'
    },

    'unit_not_created': {
      theme: 'error',
      title: 'Ошибка',
      message: 'Единица измерения не сохранена!'
    },
    'unit_created': {
      theme: 'notice',
      title: 'Создано!',
      message: 'Единица измерения успешно создана.'
    },
    'unit_updated': {
      theme: 'notice',
      title: 'Сохранено!',
      message: 'Изменения единицы измерения сохранены.'
    },
    'unit_deleted': {
      theme: 'notice',
      title: 'Удалено!',
      message: 'Единицы измерения успешно удалены.'
    },
    'settings_not_updated': {
      theme: 'error',
      title: 'Ошибка',
      message: 'Настройки ресторана не изменены.'
    },
    'settings_updated': {
      theme: 'notice',
      title: 'Сохранено!',
      message: "Настройки ресторана успешно обновлены."
    }

};



// Календарь
/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Andrew Stromnov (stromnov@gmail.com). */


function set_datepicker_defaults(){
  jQuery(function($){
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
        'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
        'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd-mm-yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
      };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
  });

  $.datepicker.setDefaults($.datepicker.regional['ru']);
  $.datepicker.setDefaults({ dateFormat: "dd-mm-yy" });
}