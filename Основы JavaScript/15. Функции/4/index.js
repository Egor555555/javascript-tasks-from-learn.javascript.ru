function pow(x, n) {
    return x ** n;
}

let x = +prompt('Введите x');
let n = +prompt('Введите n');

if (n >= 1 && n % 1 === 0) {
    alert(pow(x, n));
}
else{
    alert(`Степень ${n} не поддерживается`);
}