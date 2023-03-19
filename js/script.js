// task #1
let x = 10, y = 7;

console.log((x > y) ? 'x больше, чем y' : 'x больше, чем y');

// task #2

const num = +prompt('Введите число')
if (num % 2 == 0) {
    alert('Число ' + num + ' четное')
} else {
    alert('Число ' + num + ' нечетное')
}

// task #3

const number = prompt('Введите целое число')
    if (number === 0) {
    alert('Вы ввели ноль')
    } else  if (number >= 1 && number < 10) {
        alert('Число ' + number + ' однозначное положительное')
    } else if (number >= 10 && number < 100) {
        alert('Число ' + number + ' двухзначное положетильное')
    } else if (number >= 100 && number < 1000) {
        alert('Число ' + number + ' трехзначное положительное')
    } else  if (number <= -1 && number > -10) {
        alert('Число ' + number + ' однозначное отрицательное')
    } else if (number <= -10 && number > -100) {
        alert('Число ' + number + ' двухзначное отрицательное')
    } else if (number <= -100 && number > -1000) {
        alert('Число ' + number + ' трехзначное отрицательное')
    }
console.log(number.length);

// tusk #4
const number1 = prompt('Введите первое число')
const number2 = prompt('Введите второе число')
const number3 = prompt('Введите третье число')

if (number1 > number2 && number1 > number3) {
    alert('Число ' + number1 + ' большее из трех введенных чисел')
} else if (number2 > number1 && number2 > number3) {
    alert('Число ' + number2 + ' большее из трех введенных чисел')
} else if (number3 > number1 && number3 > number2) {
    alert('Число ' + number3 + ' большее из трех введенных чисел')
}

// tusk #5
const triangleA = prompt('Введите длину первой стороны треугольника')
const triangleB = prompt('Введите длину второй стороны треугольника')
const triangleC = prompt('Введите длину третьей стороны треугольника')

if (triangleA + triangleB > triangleC && triangleB + triangleC > triangleA && triangleA + triangleC > triangleB) {
    alert('Треугольнику быть')
} else {
    alert('Учи математику')}