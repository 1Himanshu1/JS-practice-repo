const count = 10.88; // automatic defined number
console.log(count); 

const balance = new Number(10000); // specifically cast that it is a number by using new(object hence it will have key-value methods by prototype)
console.log(balance);

console.log(balance.toString().length); // converts into string
console.log(balance.toFixed(2)); // decimal points

console.log(count.toPrecision(2)); // round of to nearest whole num

const num = 1112.34;
console.log(num.toPrecision(3));

const n = 10000000
console.log(n.toLocaleString('en-IN'));