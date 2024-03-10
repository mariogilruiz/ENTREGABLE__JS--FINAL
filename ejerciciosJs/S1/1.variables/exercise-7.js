/*let globalBasePrice = 10000;
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 };
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 };*/
const globalBasePrice = 2500;

car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 };
car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 };

const finalPriceBmw = globalBasePrice + car1.basePrice;
const finalPriceChevrolet = globalBasePrice + car2.basePrice;

car1.finalPrice = finalPriceBmw;
car2.finalPrice = finalPriceChevrolet;

console.log(car1)
console.log(car2)