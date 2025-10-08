/* Каковы координаты центра поля?

Вычислите их и используйте, чтобы поместить мяч в центр поля

Элемент должен позиционироваться за счёт JavaScript, а не CSS.
Код должен работать с любым размером мяча (10, 20, 30 пикселей) и любым размером поля без привязки к исходным значениям.
P.S. Да, центрирование можно сделать при помощи чистого CSS, но задача именно на JavaScript. Далее будут другие темы и 
более сложные ситуации, когда JavaScript будет уже точно необходим, это – своего рода «разминка». */

let field = document.getElementById('field');
let ball = document.getElementById('ball');

let y = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2);

let x = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2);

ball.style.left = `${x}px`;
ball.style.top = `${y}px`;

