/* Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0». */

function sumInput() {
    let arr = [];
    let sum = 0;
    let value;

    while (true) {
        value = prompt('Введите число');
        
        if (value === null || value === '' || isNaN(value)) break;

        arr.push(+value);
    }

    for (num of arr) {
        sum += num;
    }

    return sum;
}

let sum = sumInput();

alert(sum);
