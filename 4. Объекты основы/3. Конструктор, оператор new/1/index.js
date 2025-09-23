/* Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true

Если да – приведите пример вашего кода. */

// Ответ: да, возможно. Вот код ниже

let obj = {
    name: 'Pete',
    isAdmin: true, 
}

function A() {
    return obj;
}
function B() {
    return obj;
}

let a = new A();
let b = new B();

alert(a == b); // true