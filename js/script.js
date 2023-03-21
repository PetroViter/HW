'use strict'
const number = +prompt('Введите число');
const exponent = +prompt('Введите степень');
function exponentiation (a , extent = 1) {

    if (isNaN(a) || isNaN(extent)) {
        alert('Вы ввели некорректные данные');
    } else {
        return a ** extent;
    }

}

const operation = exponentiation(number, exponent);
alert(operation)





