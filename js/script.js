//1
document.write( '<pre> Задание 1 <pre>')
for (let num = 10; num < 21; num++) {
    document.write(num + ',');
}
//2
document.write( '<pre> Задание 2 <pre>')
for (let num2 = 10; num2 < 21; num2++) {
    document.write( num2 ** 2 + ',')
}
//3
document.write( '<pre> Задание 3 <pre>')
for (let num7 = 7, multi = 1; multi < 11; multi++) {
    document.write(num7 * multi + ',')
}
//4
document.write( '<pre> Задание 4 <pre>')
for (let num15 = 0, a = 1; a < 16; a++) {
     document.write((num15 += a) + ',')
}
//5
document.write( '<pre> Задание 5 <pre>')
for (let num35 = 15, b = 16; b < 36; b++) {
    document.write((num35 *= b) + ',')
}
//6
document.write( '<pre> Задание 6 <pre>')
let n500 = 500;
let n = 0
for (let c = 1; c < 501; c++) {
    n = n + c
}
document.write(n /= n500)
//7
document.write( '<pre> Задание 7 <pre>')
let sum30 = 0;
for (let num30 = 30; num30 < 81; num30++) {
    if (num30%2 === 0) {
        sum30 += num30
    }
}
document.write(sum30)
//8
document.write( '<pre> Задание 8 <pre>')
for (let num100 = 100; num100 < 201; num100++) {
    if (num100%3 === 0) {
        document.write(num100 + ',')
    }
}
//9
document.write( '<pre> Задание 9 <pre>')
let natur = 100;
let dividers = 0;
let sumDiv = 0;

for (let numN = 2; numN < natur; numN++) {
    if (natur % numN === 0) {
        document.write(numN + ',')
        if (numN % 2 === 0) {
            dividers++
            sumDiv += numN;
        }
    }
}
//10
document.write( '<pre> Задание 10 <pre>')
document.write('Количество четных делителей ' + dividers)

//11
document.write( '<pre> Задание 11 <pre>')
document.write('Сумма четных делителей ' + sumDiv)

//12
document.write( '<pre> Задание 12 <pre>')
let number = 0;
for (let x = 1; x <= 9; x++) {
    for (let y = 1; y <= 10; y++) {
        number = x * y;
        document.write(' ' + number + ' ')
    }
    document.write('<pre>')
}