const divider = prompt('Enter number')
const smallestDivisor = (num) => {
    if (num < 1) return NaN
    for (let i = 2; i < num; i++) {
        if ( num % i === 0) return i;
    } return num;
}
console.log(smallestDivisor(divider));
