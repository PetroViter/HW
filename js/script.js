// task #1
const sportsCanada = prompt('Какой национальный вид спорта Канады: 1) Боулинг; 2) Баскетбол; 3)Футбол; 4)Лакросс;');
if (sportsCanada == 'Баскетбол' || sportsCanada == 'Футбол' || sportsCanada == 'Боулинг') {
    alert('no');
} else if (sportsCanada == 'Лакросс') {
    alert('yes!!!')}


// task #2

let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (true) {
    case (numOrStr === null):
        console.log('ви скасували')
        break;
    case (numOrStr.trim() === ''):
        console.log('Empty String')
        break;
    case isNaN( +numOrStr):
        console.log(' number is Ba_NaN')
        break;
    default:
        console.log('OK!');
}

