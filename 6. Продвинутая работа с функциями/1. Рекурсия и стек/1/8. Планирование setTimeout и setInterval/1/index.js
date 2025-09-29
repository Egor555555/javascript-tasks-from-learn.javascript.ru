/* Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout. */

// Используя setInterval
// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(function() {
//         alert(current);

//         if (current === to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);

// }

printNumbers(2, 5);

// Используя рекурсивный setTimeout

function printNumbers(from, to) {

    let current = from;

    setTimeout(function print(){
        alert(current);
        if (current < to) {
            setTimeout(print, 1000);
        }
        current++;
    }, 1000);
}