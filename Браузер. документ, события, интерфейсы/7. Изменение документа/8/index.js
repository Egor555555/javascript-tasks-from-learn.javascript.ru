/*  <!-- клик по этой кнопке вызовет clockStart() -->
  <input type="button" onclick="clockStart()" value="Старт">

  <!-- клик по этой кнопке вызовет clockStop() -->
  <input type="button" onclick="clockStop()" value="Стоп"> */

let timerId;

function update() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let clockHours = document.querySelector('.hours');
    if(hours < 10) hours = '0' + hours;
    clockHours.textContent = hours;

    let clockMinutes = document.querySelector('.minutes');
    if(minutes < 10) minutes = '0' + minutes;
    clockMinutes.textContent = minutes;

    let clockSeconds = document.querySelector('.seconds');
    if(seconds < 10) seconds = '0' + seconds;
    clockSeconds.textContent = seconds;

}

function clockStart() {
    timerId = setInterval(update, 1000);
    update();
}

function clockStop() {
    clearInterval(timerId);
    timerId = null;
}