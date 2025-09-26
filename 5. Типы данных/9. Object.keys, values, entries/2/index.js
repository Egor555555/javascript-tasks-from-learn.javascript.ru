/* Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные». */

function count(obj) {
    let count = 0;

    for (key of Object.keys(obj)) {
        count++;
    }

    return count;
}

let user = {
    name: 'John',
    age: 30
};

alert(count(user)); // 2