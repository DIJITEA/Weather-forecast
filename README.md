# Weather forecast

## Структура

Проект состоит из четырех уникальных компонентов 

### `<CityForm />`
 Включает в себя массив городов и их координаты с помощью которых формируется запрос к API, который в свою очередь возвращает массив в JSON формате. 
 После чего данный JSON отправляется в родительский компонент.
### `<MainOutput />`
 Принимает в себя JSON и обрабатывает данные на основе собственных элементов отрендеренных через собственный массив присваивая данным элементам дату и температуру полученные из JSON
### `<CityDateForm />`
 Компонент основанный на элементе CityForm за исключением того что делает другой API запрос с использованием даты, который получает из элемента input
### `<MainOutputPast />`
 Обробатывает JSON полученный из компонента CityDateForm

## Сомнения

 1. структурировании HTML состовляющей: возможно излишнее количество оберток
 2. излишнее количество переменных и некоторые 'state' просто ужасны (конкретно 'elementDate' в MainOutput)
 3. вызов функции в том же MainOutput на 96-ой строке сильно смущает

## Не реализованный вещи

 1. Продублировал много css классов из-за собственной ошибки
 2. Из-за продублированных классов и нехватки времени вместо того чтобы переписать HTML и css составляющие пришлось использовать различного рода костыли, это можно наглядно увидеть на примере слайдера в компоненте MainOutput
 3. Не успел реализовать иконки погоды :c