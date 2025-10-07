/* Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul> */

let ul = document.getElementById('ul');

let li1 = document.getElementById('one');

li1.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
