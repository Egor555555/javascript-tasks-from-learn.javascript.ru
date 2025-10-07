/* Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение. */

let menu = document.querySelector('[data-widget-name]');
let name = menu.getAttribute('data-widget-name');

alert(name);