'use strict'
const number = prompt('Введите число');
const exponent = prompt('Введите степень');
function exponentiation (a , extent = 1) {

    if ( Number(a) && Number(extent))  {
        return a ** extent;
    } else {
        return 'Вы ввели некорректные данные';
    }
}

const operation = exponentiation(number, exponent);
alert(operation)





