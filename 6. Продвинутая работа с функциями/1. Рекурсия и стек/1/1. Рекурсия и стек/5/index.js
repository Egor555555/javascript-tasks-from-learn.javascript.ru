/* Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию. */

// Решение с использованием рекурсии
// function printReverseList(list) {

//     if(list.next) {
//         printReverseList(list.next);
//     }

//     alert (list.value);
// }

// Решение с использованием цикла

function printReverseList(list) {

    let newList = list;
    let arr = [];

    while (newList) {
        arr.push(newList.value);
        newList = newList.next;
    }
    
    arr.reverse();

    for (let i = 0; i < arr.length; i++) {
        alert(arr[i]);
    }

}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printReverseList(list);