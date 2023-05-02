function number (){
    let b = 0;
    return function (x) {
        b += x;
        return b;
        }
}
const sum = number();
sum(5);
sum(10);
sum(5);