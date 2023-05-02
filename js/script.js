'use strict'
const calc = {
    read () {
        this.a = +prompt('Ведите число a');
        this.b = +prompt('Ведите число b');
    },
    sum () {
        return this.a + this.b;
    },
    mul () {
        return this.a * this.b;
    }
}

calc.read();
alert(calc.sum());
alert(calc.mul());

