//1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; //либо arr1.concat(arr2)
console.log(arr3);
//2
const arr4 = [1, 2, 3];
arr4.sort((a,b) => a < b ? 1 : -1) // либо arr4.reverse()
console.log(arr4);
//3
const arr5 = [1, 2, 3];
arr5.push(4, 5, 6);
console.log(arr5);
//4
const arr6 = [1, 2, 3];
arr6.unshift(4, 5, 6);
console.log(arr6);
//5 и 6
const arr7 = ['js', 'css', 'jq'];
console.log(arr7.shift());
console.log(arr7.pop());
//7,8
const arr8 = [1, 2, 3, 4, 5];
console.log(arr8.slice(0, 3));
console.log(arr8.slice(-2));
//9
const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(arr9);
//10
const arr10 = [1, 2, 3, 4, 5];
arr10.splice(0, 1);
arr10.splice(3, 1);
console.log(arr10);
//11
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3,0, 'a', 'b', 'c');
console.log(arr11);
//12
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, 'a', 'b');
arr12.splice(6, 0, 'c');
arr12.splice(8, 0, 'e');
console.log(arr12);
//13
const arr13 = [3, 4, 1, 2, 7].sort((a, b) => a < b ? -1 : 1 );
console.log(arr13);
//14
const arr14 = [5, 6, 7, 8, 9].reduce((sum, current) => sum + current);
console.log(arr14);
//15
const arr15 = [5, 6, 7, 8, 9].map(a => a**2);
console.log(arr15);
// 16
const arr16 = [1,-3, 5, 6,-7, 8, 9,-11].filter(a => a > 0);
console.log(arr16);
//17
const arr17 = [1,-3, 5, 6,-7, 8, 9,-11].filter(a => a % 2 === 0 );
console.log(arr17);
//18
const arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'].filter(a => a.length > 5)
console.log(arr18);
//19
const arr19 = [1, 2, [3, 4], 5, [6, 7]].filter(Array.isArray)
console.log(arr19);
//20
const arr20 = [5,-3, 6,-5, 0,-7, 8, 9].filter(a => a < 0);
console.log(arr20.length);