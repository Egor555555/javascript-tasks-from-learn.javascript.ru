/* Создайте кнопку, которая будет скрывать себя по нажатию. */

let button = document.getElementById('hideMyself');

button.onclick = function() {
    button.style.display = 'none';
}
