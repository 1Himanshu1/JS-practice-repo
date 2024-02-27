// 1. Number conversion
/* typeof(NaN) is also number so u must be careful working with type conversion in numbers*/

let score = "abx";

let num = Number(score);
// console.log(typeof num);
// console.log(num);

let azeeb = "33abc";
// console.log(Number(azeeb));
// console.log(typeof Number(azeeb));

/* NOte: "33" => 33
        "33abc" => NaN
        true => 1; false => 0 */


// 2. String conversion
/* */
let val = 33
// console.log(typeof val);

let conv = String(val);
// console.log(typeof conv);


// 3. Boolean conversion

let wool = 1;
let bool = Boolean(wool);
// console.log(bool);
// console.log(typeof bool); 

/*Note: 1 => true; 0 => false 
        " " => false; "abc" => true*/

// **************** OPERATIONS *****************

let value = 3;
let negVal = -value;
// console.log(negVal);

console.log(2**3);
console.log(2/3);
console.log(3%2);

let str1 = "Hello ";
let str2 = "World!";

console.log( str1 + str2);

console.log("1"+2);
console.log(1+"2");
console.log("1"+1+"2");
console.log(2+1+"2");

console.log((2+3)*5%3);

console.log(+true);
console.log(+"");

let num1,num2,num3 = 2+2; // incorrect
// num1=num2=num3 = 2+2 correct
console.table([num1,num2,num3]);

let count = 100;
// ++count;
console.log(count++);
console.log(++count);


