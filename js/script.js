const litersOfBorscht = prompt('Введите количество борща в литрах');
const weightOfP = 0.075;
const quantityPerLiter = 4;
const priceOfP = 13;
const sum = (capacity, weight, quantityLiter, price ) => {
    let results  = quantityLiter * weight * capacity * price;
    if (Number(litersOfBorscht)) return Math.ceil(results);
}
sum(quantityPerLiter, weightOfP, litersOfBorscht, priceOfP)






