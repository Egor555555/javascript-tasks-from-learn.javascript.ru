/* Допустим, у нас есть клиент с низкой скоростью соединения, и мы хотим сэкономить его трафик.

Для этого мы решили не показывать изображения сразу, а заменять их на «макеты»

То есть, изначально, все изображения – placeholder.svg. Когда страница прокручивается до того положения, где 
пользователь может увидеть изображение – мы меняем src на значение из data-src, и таким образом изображение загружается. 

Прокрутите его, чтобы увидеть загрузку изображений «по требованию».

Требования:

При загрузке страницы те изображения, которые уже видимы, должны загружаться сразу же, не ожидая прокрутки.
Некоторые изображения могут быть обычными, без data-src. Код не должен касаться их.
Если изображение один раз загрузилось, оно не должно больше перезагружаться при прокрутке.
P.S. Если можете, реализуйте более продвинутое решение, которое будет загружать изображения на одну страницу 
ниже/после текущей позиции.

P.P.S. Достаточно обрабатывать вертикальную прокрутку, горизонтальную не требуется. */

/**
     * Проверка видимости элемента (в видимой части страницы)
     * Достаточно, чтобы верхний или нижний край элемента был виден
     */
function isVisible(elem) {
    let coords = elem.getBoundingClientRect();

    let windowHeight = document.documentElement.clientHeight;

    let topVisible = coords.top > 0 && coords.top < windowHeight;

    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
}

function showVisible() {
    for (let img of document.querySelectorAll('img')) {
        let realSrc = img.dataset.src;
        if (!realSrc) continue;

        if (isVisible(img)) {
            // отключение кеширования
            // эта строка должна быть удалена в "боевом" коде
            realSrc += '?nocache=' + Math.random();

            img.src = realSrc;

            img.dataset.src = '';
        }
    }

}

window.addEventListener('scroll', showVisible);
showVisible();