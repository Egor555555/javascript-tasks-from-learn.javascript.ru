/* Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование): 
научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.

Новые значения для аргумента position:

top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.
Например:

// показывает заметку поверх цитаты
positionAt(blockquote, "top-out", note);

// показывает заметку внутри цитаты вблизи верхнего края элемента
positionAt(blockquote, "top-in", note); */

function positionAt(anchor, position, elem) {
    let anchorCoords = getCoords(anchor);
    elem.style.position = 0;

    switch (position) {
        case "top-out":
            elem.style.left = anchorCoords.left + 'px';
            elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
            break;
        case "top-in":
            elem.style.left = anchorCoords.left + 'px';
            elem.style.top = anchorCoords.top + 'px';
            break;
        case "right-out":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
            elem.style.top = anchorCoords.top + "px";
            break;
        case "right-in":
            elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
            elem.style.top = anchorCoords.top + 'px';
            break;
        case "bottom-out":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
            break;
        case "bottom-in":
            elem.style.left = anchorCoords.left + "px";
            elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
            break;
    }
}

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
 */
function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "bottom-in", "note bottom-in");
showNote(blockquote, "bottom-out", "note bottom-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "right-in", "note right-in");