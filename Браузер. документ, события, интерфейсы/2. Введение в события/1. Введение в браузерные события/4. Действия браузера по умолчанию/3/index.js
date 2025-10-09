/* Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант. 

P.S. Используйте делегирование. */

let thumbs = document.getElementById('thumbs');
let largeImg = document.getElementById('largeImg');

thumbs.onclick = function(event) {

    let target = event.target.closest('a');

    if (!target) return;

    showThumbnail(target.href, target.title);
    event.preventDefault();

    function showThumbnail(href, title) {
        largeImg.src = href;
        largeImg.title = title;
    }
}