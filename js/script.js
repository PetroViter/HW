'use strict'
const age = +prompt('Enter your years of birth');
if (age == ' ') {
    alert('Жаль, что Вы не захотели ввести свой год рождения')
} else (document.write('You are ' + (2023 - age) + ' years old.'));

const city = prompt('What city do you live in?');
switch (city) {
    case 'Kyiv':
        document.write('\n You live in the capital of Ukraine.');
        break;
    case 'Berlin':
        document.write(' \n You live in the capital of Germany.');
        break;
    case 'London':
        document.write(' \n You live in the capital of England.');
        break;
    case null:
        alert('Жаль, что Вы не захотели ввести свой город, где живете');
        break;
    default:
        document.write('\n You live in ' + city + '.')
        break;
}

const champion = prompt('What is your favorite sport?');
switch (champion) {
    case 'Football':
        document.write('\n Do you want to be like Messi.');
        break;
    case 'Hockey':
        document.write('\n Do you want to be like Jaromir Jagr.');
        break;
    case 'Basketball':
        document.write('\n Do you want to be like Jordan.');
        break;
    case null:
        alert('Жаль, что Вы не захотели ввести свой любимый вид спорта.');
        break;
    default:
        document.write('\n Your favorite sport is ' + champion + '.');
}