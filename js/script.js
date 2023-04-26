const numbers = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//1
const sumPositiveNumbers = numbers.reduce(function ( sum, elem) {
    if (elem > 0) return elem + sum;
    return sum;
})
console.log(sumPositiveNumbers);
//2
const minNumber  = numbers.reduce((a,b) => Math.min(a,b));
console.log(minNumber, numbers.indexOf(minNumber));
//3
const maxNumber = numbers.reduce((a,b) => Math.max(a,b));
console.log(maxNumber, numbers.indexOf(maxNumber));
//4
const negativeSumElements = numbers.filter((element) => element < 0)
console.log(negativeSumElements.length)
//5 и 8
const oddPositiveNumber = numbers.filter(function (element) {
    if (element > 0) return element % 2 === 1
});
console.log(oddPositiveNumber.length, oddPositiveNumber.reduce((a,b) => a + b));
//6 и 7
const evenPositiveNumber = numbers.filter(function (element) {
    if (element > 0) return element % 2 === 0
});
console.log(evenPositiveNumber.length, evenPositiveNumber.reduce((a,b) => a + b));
//9
const productOfPositiveNumbers = numbers.filter((a) => a > 0);
console.log(productOfPositiveNumbers.reduce((a,b) => a * b));
//10
let maxElementArray = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxElementArray) {
       maxElementArray = numbers[i];
    }
}

const result = numbers.map(val => maxElementArray !== val ? 0 : val);
console.log(result);