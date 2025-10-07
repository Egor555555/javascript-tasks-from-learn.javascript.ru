/* Для страницы:

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
Напишите код, как получить…

1) элемент <div>?
2) <ul>?
3) второй <li> (с именем Пит)? */

// 1)
let div = document.body.firstElementChild;
console.log(div);

// 2)
let ul = div.nextElementSibling;
console.log(ul);

// 3)
let secondLi = ul.lastElementChild;
console.log(secondLi);