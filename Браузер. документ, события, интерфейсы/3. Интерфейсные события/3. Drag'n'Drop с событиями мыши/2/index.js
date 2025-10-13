/* В этой задаче вы можете проверить своё понимание сразу нескольких аспектов Drag’n’Drop и DOM.

Сделайте так, чтобы элементы с классом draggable можно было переносить мышкой. Как мяч в этой главе.

Требования к реализации:

Используйте делегирование событий для отслеживания начала перетаскивания: только один обработчик событий 
mousedown на документе.
Если элементы подносят к верхней/нижней границе окна – оно должно прокручиваться вверх/вниз, чтобы 
позволить дальнейшее перетаскивание.
Горизонтальная прокрутка отсутствует (чуть-чуть упрощает задачу, её просто добавить).
Элемент при переносе, даже при резких движениях мышкой, не должен даже частично попасть вне окна.
Демо слишком велико для размещения здесь, перейдите по ссылке ниже. */

let isDragging = false;

document.addEventListener('mousedown', function (event) {

    let dragElement = event.target.closest('.draggable');

    if (!dragElement) return;

    event.preventDefault();

    dragElement.ondragstart = function () {
        return false;
    };

    let coords, shiftX, shiftY;

    startDrag(dragElement, event.clientX, event.clientY);

    function onMouseUp(event) {
        finishDrag();
    };

    function onMouseMove(event) {
        moveAt(event.clientX, event.clientY);
    }

    function startDrag(element, clientX, clientY) {
        if (isDragging) {
            return;
        }

        isDragging = true;

        document.addEventListener('mousemove', onMouseMove);
        element.addEventListener('mouseup', onMouseUp);

        shiftX = clientX - element.getBoundingClientRect().left;
        shiftY = clientY - element.getBoundingClientRect().top;

        element.style.position = 'fixed';

        moveAt(clientX, clientY);
    };

    function finishDrag() {
        if (!isDragging) {
            return;
        }

        isDragging = false;

        dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
        dragElement.style.position = 'absolute';

        document.removeEventListener('mousemove', onMouseMove);
        dragElement.removeEventListener('mouseup', onMouseUp);
    }

    function moveAt(clientX, clientY) {
        let newX = clientX - shiftX;
        let newY = clientY - shiftY;

        let newBottom = newY + dragElement.offsetHeight;

        if (newBottom > document.documentElement.clientHeight) {
            let docBottom = document.documentElement.getBoundingClientRect().bottom;

            let scrollY = Math.min(docBottom - newBottom, 10);

            if (scrollY < 0) scrollY = 0;

            window.scrollBy(0, scrollY);

            newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
        }

        if (newY < 0) {
            let scrollY = Math.min(-newY, 10);
            if (scrollY < 0) scrollY = 0; 

            window.scrollBy(0, -scrollY);
            newY = Math.max(newY, 0);
        }

        if (newX < 0) newX = 0;
        if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
            newX = document.documentElement.clientWidth - dragElement.offsetWidth;
        }

        dragElement.style.left = newX + 'px';
        dragElement.style.top = newY + 'px';
    }

});