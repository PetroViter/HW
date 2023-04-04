
const num = prompt('Enter number')
const primeNumber = (num) => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        } return true;

}
primeNumber(num);