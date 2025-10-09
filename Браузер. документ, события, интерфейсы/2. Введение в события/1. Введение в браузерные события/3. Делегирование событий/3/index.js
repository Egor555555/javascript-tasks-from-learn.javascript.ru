/* Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по 
соответствующему столбцу.

Каждый элемент <th> имеет атрибут data-type

В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, 
ведь числа сортируются иначе, чем строки.

Сортировка должна поддерживать только типы "string" и "number". */

let grid = document.getElementById('grid');

grid.addEventListener('click', function(event) {
    if (event.target.tagName !== 'TH') return;

    let th = event.target;

    sortGrid(th.cellIndex, th.dataset.type);
});

function sortGrid(index, type) {
    let tbody = grid.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);

    let compare;

    switch(type) {
        case 'number':
            compare = function(rowA, rowB) {
                return rowA.cells[index].innerHTML - rowB.cells[index].innerHTML;
            };
            break;
        case 'string':
            compare = function(rowA, rowB) {
                return rowA.cells[index].innerHTML > rowB.cells[index].innerHTML ? 1 : -1;
            }
            break;
    }

    rowsArray.sort(compare);

    tbody.append(...rowsArray);
}