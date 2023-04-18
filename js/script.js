//1
const arr = ['a', 'b', 'c', 'd'];
alert(arr[0] + '+' + arr[1] + ',' + arr[2] + '+' + arr[3]);
//2
const arr1 = [2, 5, 3, 9]
const result = (arr1[0] * arr1[1]) + (arr1[2] * arr1[3]);
alert(result);
//3
const arr2 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
alert(arr2[1][0]);
//4
const obj = {
    js:['jQuery', 'Angular'],
    php: 'hell0',
    css:'world'
};
alert(obj.js[0]);
//5
const arr3 = [];
let item = '';
for (let i = 1; i < 10; i++ ) {
    item += 'x';
    arr3.push(item)
}
alert(arr3);
//6
const arr4 = [];

for (let i = 1; i < 10; i++ ) {
    let item1 = '';
    for (let j = 0; j < i; j++)
    item1 += i;
    arr4.push(item1)
}
alert(arr4);
//7
const arrayFill = (value, length) => {
    const arr5 = [];
    for (let i = 0; i < length; i++) {
        arr5.push(value);
    }
    return arr5
}
alert(arrayFill('x', 5));
//8
const arr6 = [2, 1, 4, 5, 8, 2]
const func = (arr) => {
     let sum = 0;
     for (let i = 1 ; i < arr.length; i++) {
        sum += arr[i];
        if (sum > 10)  return i;
     }
 }
 alert(func(arr6));
//9
const arr7 = [4, 5, 5, 6, 7, 2]
const  result2 = [];
   for (let i = arr7.length - 1; i >= 0; i--) {
result2.push(arr7[i]);
}
alert(result2);
   //10
const arr8 = [[1, 2, 3], [4, 5], [6]].flat(Infinity).reduce((acc, val) => acc + val);
alert(arr8);
//11
const arr9 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].flat(2).reduce((acc, val) => acc + val);
alert(arr9);