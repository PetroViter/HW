'use strict'

void function () {
    const generateNumberRandom = () => {
        const arrRandomNum = [];
        const generatorNum = () => {
            const randomNum = Math.floor(Math.random()*100) + 1;
            if(arrRandomNum.includes(randomNum)) {
                return generatorNum()
            } arrRandomNum.push(randomNum);
            return arrRandomNum;
        }

        return generatorNum
    }
    const numGeneratorInstance  = generateNumberRandom();
    for (let i = 0; i < 100; i++) {
        const res = numGeneratorInstance();
        console.log(res)
    }
}()

