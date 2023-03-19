let x = 4;
let y = 9;
let R = 10;

let A = Math.sqrt(x*x + y*y)

let dotLocation = A < R ? 'Точка А лежит в окружности' : 'Точка А не лежит в окружности';

console.log(dotLocation);
