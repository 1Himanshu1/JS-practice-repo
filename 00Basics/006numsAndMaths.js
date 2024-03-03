const count = 10.88; // automatic defined number
// console.log(count); 

const balance = new Number(10000); // specifically cast that it is a number by using new(object hence it will have key-value methods by prototype)
// console.log(balance);

// console.log(balance.toString().length); // converts into string
// console.log(balance.toFixed(2)); // decimal points

// console.log(count.toPrecision(2)); // round of to nearest whole num

const num = 1112.34;
//console.log(num.toPrecision(3));

const n = 10000000
//console.log(n.toLocaleString('en-IN')); //puts numbers and commas in Indian counting styke in string format

// ++++++++++++++ MATHS +++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5)); // absolute
// console.log(Math.round(4.8)); // round-of
// console.log(Math.ceil(4.2)); //gives ceiling value
// console.log(Math.floor(4.9)); // gives floor value
// console.log(Math.sqrt(4));
// console.log(Math.pow(2,3));
// console.log(Math.min(2,4,12,55,1)); 
// console.log(Math.max(2,4,12,55,1)); 

// important - Math.random(gives a random number in range of 0 to 1)

console.log(Math.random());
console.log(Math.random()*10); // using random generated value for our use case
console.log((Math.random()*10) + 1); // to avoid getting 0 in case of first two (or more) digits being ZERO
console.log(Math.floor(Math.random()*10) + 1); // to avoid zero and get only one value

const min = 10;
const max = 20;

// STUDY THIS FUNCTIONING AGAIN
console.log(Math.floor(Math.floor(Math.random()*(max - min +1) + min))); // to give a random int in range of min and max
