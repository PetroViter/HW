const age = +prompt('Enter your years of birth');
if (age) {
    document.write('You are ' + (2023 - age) + ' years old.')
    const city = prompt('What city do you live in?');
    if (city) {
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
            default:
                document.write('\n You live in ' + city + '.')
                break;
        }
        const champion = prompt('What is your favorite sport?');
        if (champion) {
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
                default:
                    document.write('\n Your favorite sport is ' + champion + '.');
            }
        } else  alert('Жаль, что Вы не захотели ввести свой любимый вид спорта.');
    } else alert('Жаль, что Вы не захотели ввести свой город, где живете');
} else alert('Жаль, что Вы не захотели ввести свой год рождения');