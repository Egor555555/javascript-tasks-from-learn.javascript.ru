/* Есть дерево, организованное в виде вложенных списков ul/li.

Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, 
без детей – пропускайте. */

let lis = document.getElementsByTagName('li');

for (let li of lis) {
    let count = li.getElementsByTagName('li').length;
    if(!count) continue;

    li.firstChild.data += `[${count}]`;
}

