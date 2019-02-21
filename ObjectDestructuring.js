const obj1 = { id: 1, name: 'sherlock'};

const {name} = obj1;

console.log(name);


const {type = 'full time'} = obj1;

console.log(type);

const obj2 = {...obj1,author:{name:'arthur connan doyle'}};

console.log(obj2);


const {author:{name:authorName}} = obj2;
console.log(authorName);
