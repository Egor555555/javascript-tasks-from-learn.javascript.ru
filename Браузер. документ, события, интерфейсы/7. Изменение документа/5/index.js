/* Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

Например:

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};
Синтаксис:

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере 
// Вот что должно получиться
<ul>
  <li>Рыбы
    <ul>
      <li>форель</li>
      <li>лосось</li>
    </ul>
  </li>
  <li>Деревья
    <ul>
      <li>Огромные
        <ul>
          <li>секвойя</li>
          <li>дуб</li>
        </ul>
      </li>
      <li>Цветковые
        <ul>
          <li>яблоня</li>
          <li>магнолия</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
*/

function createTree(container, data) {
    container.innerHTML = createTreeText(data);
}

function createTreeText(data) {
    let li = '';
    let ul;

    for(let key in data) {
        li += '<li>' + key + createTreeText(data[key]) + '</li>';
    }

    if(li) {
        ul = '<ul>' + li + '</ul>';
    }

    return ul || '';
}

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере