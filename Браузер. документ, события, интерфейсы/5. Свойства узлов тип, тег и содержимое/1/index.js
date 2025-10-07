/* У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ? */

let ul = document.querySelector('ul');

for (let li of ul.querySelectorAll('li')) {
    let text = li.firstChild.data;

    text = text.trim();

    let count = li.getElementsByTagName('li').length;

    alert(`${text}: ${count}`);
}