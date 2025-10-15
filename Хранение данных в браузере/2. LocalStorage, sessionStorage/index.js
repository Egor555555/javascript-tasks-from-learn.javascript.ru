/* Создайте поле textarea, значение которого будет автоматически сохраняться при каждом его изменении.
Когда пользователь закроет страницу и потом откроет её заново он должен увидеть последнее введённое значение. */

let area = document.getElementById('area');
let button = document.getElementById('delete-btn');

button.onclick = function () {
    localStorage.removeItem('text');
    area.value = '';
}

area.value = localStorage.getItem('text');
area.oninput = function () {
    localStorage.setItem('text', area.value);
}