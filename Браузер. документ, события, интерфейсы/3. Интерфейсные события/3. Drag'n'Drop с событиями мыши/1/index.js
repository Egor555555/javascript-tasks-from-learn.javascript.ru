/* Создайте слайдер

Захватите мышкой синий бегунок и двигайте его.

Важные детали:

Слайдер должен нормально работать при резком движении мыши влево или вправо за пределы полосы. При этом бегунок 
должен останавливаться чётко в нужном конце полосы.
При нажатом бегунке мышь может выходить за пределы полосы слайдера, но слайдер пусть всё равно работает 
(это удобно для пользователя). */

let slider = document.getElementById('slider');

let thumb = slider.querySelector('.thumb');

thumb.onmousedown = function (event) {
    event.preventDefault();

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

        if (newLeft < 0) newLeft = 0;

        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if(newLeft > rightEdge) newLeft = rightEdge;

        thumb.style.left = newLeft + 'px';
    }

    function onMouseUp(event) {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    thumb.ondragstart = function () {
        return false;
    };
}