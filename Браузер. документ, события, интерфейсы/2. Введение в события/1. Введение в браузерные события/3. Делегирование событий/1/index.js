/* Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать. 

P.S. Используйте делегирование событий. Должен быть лишь один обработчик на элементе-контейнере для всего. */

let container = document.getElementById('container');

container.addEventListener('click', function (event) {
    if (event.target.className != 'remove-button') return;

    let pane = event.target.closest('.pane');

    pane.remove();
});

