const age = prompt('Сколько Вам лет?')
const decl = age % 10;

if (age == 11) {
    alert('Вам ' + age + ' лет')
} else if (decl === 1) {
    alert('Вам ' + age + ' год')
} else if (decl >= 2 && decl <= 4) {
    alert('Вам ' + age + ' года')
} else {
    alert('Вам ' + age + ' лет')
}