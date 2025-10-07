/* Вот документ с таблицей и формой.

Как найти?…

1) Таблицу с id="age-table".
2) Все элементы label внутри этой таблицы (их три).
3) Первый td в этой таблице (со словом «Age»).
4) Форму form с именем name="search".
5) Первый input в этой форме.
6) Последний input в этой форме.

Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика. */

// 1)
let ageTable = document.getElementById('age-table');
console.log(ageTable);

// 2) 
let labels = ageTable.querySelectorAll('label');
console.log(labels);

// 3)
let age = ageTable.querySelector('td');
console.log(age);

// 4)
let search = document.getElementsByName('search')[0];
console.log(search);

// 5)
let firstInput = search.querySelector('input');
console.log(firstInput);

// 6)
let lastInput = search.querySelectorAll('input');
console.log(lastInput[lastInput.length - 1]);