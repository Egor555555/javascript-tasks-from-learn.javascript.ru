/* Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася"; */

function ucFirst(str) {
    if (!str) return str;

    str = str[0].toUpperCase() + str.slice(1);

    return str;
}

let str = ucFirst("вася");

alert(str === "Вася");
