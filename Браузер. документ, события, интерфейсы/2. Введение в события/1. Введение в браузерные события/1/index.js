/* Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал. */

hider.onclick = function () {
    let text = document.getElementById('text');

    text.remove();
}

