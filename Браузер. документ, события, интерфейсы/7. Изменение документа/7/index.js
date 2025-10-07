/* Напишите функцию createCalendar(elem, year, month).

Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок 
с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь: */

function createCalendar(elem, year, month) {

    let table = `<table><tr>
        <th>Пн</th>
        <th>Вт</th>
        <th>Ср</th>
        <th>Чт</th>
        <th>Пт</th>
        <th>Сб</th>
        <th>Вс</th>
    </tr><tr>`;
    let d = new Date(year, month - 1);

    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }
    while (d.getMonth() === month - 1) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day === 0) day = 7;
    return day - 1;
}

createCalendar(calendar, 2012, 9);