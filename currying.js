const curriedSum = a=> b=> a + b;

const incrementBy5 = curriedSum(5);

console.log(incrementBy5(6));