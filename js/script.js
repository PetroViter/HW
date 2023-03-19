const x = 4;
const y = 9;
const R = 10;

const A = Math.sqrt(x*x + y*y)

const dotLocation = A < R ? 'Точка А лежит в окружности' : 'Точка А не лежит в окружности';

console.log(dotLocation);
