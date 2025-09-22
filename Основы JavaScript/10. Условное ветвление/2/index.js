/* Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» */

let nameOfJavaScript = prompt('Какое «официальное» название JavaScript?');

if (nameOfJavaScript === 'ECMAScript'){
    alert('Верно!');
}
else {
    alert('Не знаете? ECMAScript!');
}