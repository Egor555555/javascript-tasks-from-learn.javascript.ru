/* Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true */

function extractCurrencyValue(str) {
    let number = str.slice(1);

    return +number;
}

let currency = extractCurrencyValue('$120');

alert(currency);
