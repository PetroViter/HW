//1
const getFactorial = n => {
  if (n === 1) return 1;
  return n * getFactorial(n - 1);
}

console.log(getFactorial(3))
//2
const pow = (x,n) => {
    if (n !== 1) return  x *= pow(x,n - 1);
        return x;
}
console.log( pow(5,4));
//3
const sum = (a, b) => {
    if (b === 0) return a;
    return sum(a + 1, b - 1);
}
console.log(sum(5,4))