/* Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red'; */

let table = document.body.firstElementChild;

for(let i = 0; i < table.rows.length; i++) {
    let tr = table.rows[i];

    let td = tr.cells[i];

    td.style.backgroundColor = 'red';
}

console.log(table);