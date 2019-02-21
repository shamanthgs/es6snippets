const prices = [3,4,6];

const applyDiscount = a => a - 5;

const greaterThanZero = a => a > 0;

const discountedPrices = prices.map(applyDiscount).filter(greaterThanZero);

console.log(discountedPrices);