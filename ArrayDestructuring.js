const arr1 = [1,2,3];

const [,second,] = arr1;

console.log(second);

const arr2 = [4,5,6]

const arr3 = [...arr1,...arr2];

console.log(arr3);