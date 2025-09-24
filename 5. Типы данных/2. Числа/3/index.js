/* Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». 
В этом случае функция должна вернуть null. */

function readNumber() {
    let num = prompt('Введите число');

    // while (num !== null || num !== '' || !isNaN(num)) {
    //     num = prompt('Введите корректное число');
    // }

    // if (num === null || num === '') return null;

    while(true){

        if (num === null || num === ''){
            return null;
        } else if (isNaN(num)) {
            num = prompt('Введите корректное число');
        } else {
            break;
        }
    }

    return +num;
}

let num = readNumber();

alert(num);
