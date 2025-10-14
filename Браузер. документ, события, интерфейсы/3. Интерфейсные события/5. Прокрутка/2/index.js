/* Создайте кнопку «наверх», чтобы помочь с прокруткой страницы.

Она должна работать следующим образом:

Пока страница не прокручена вниз хотя бы на высоту окна – кнопка невидима.
Когда страница прокручена вниз больше, чем на высоту окна – появляется стрелка «наверх» в левом верхнем углу. 
Если страница прокручивается назад, стрелка исчезает.
Когда нажимается стрелка, страница прокручивается вверх. */

let arrowTop = document.getElementById('arrowTop');

arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
}

window.addEventListener('scroll', function() {
    arrowTop.hidden = pageYOffset < document.documentElement.clientHeight;
})