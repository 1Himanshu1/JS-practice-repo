// ******************* PRIMITIVE ********************
// They are being called by VALUE, i.e when u call them, in sbki ek copy aapko milti hai rather than the actual reference to their value 
/*  7 types : String, Number, Boolean, null, undefined,
 Symbol(used in advance Js for naming similar components using symbols to make them unique),
 BigInt (big integer values)
*/
 
// JS is dyanamically typed language i.e we don't have to define the data type of the variables

//1. Number
const score = 100
const scoreValue = 100.3
//2. String
let name = "Himanshu";
//3. Boolean
const isLoggedIn = false
//4. Null
const outsideTemp = null // empty value
//5.undefined
let userEmail; // undefined

// 6.Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false as both variables are wrapped inside Symbol so both will not be equal 

//7. BigInt (n after the number makes it BigInt)
const bigNumber = 3456543576654356754n 



// ************ REFERENCE (Non primitive) ***************
// Inka memory me reference aapko diya jata hai
// Array, Objects, Functions

//1.Array
const heros = ["shaktiman", "naagraj", "doga"];

//2.Objects
let myObj = {
    name: "hitesh",
    age: 22,
}
//3.Function
const myFunction = function(){
    console.log("Hello world");
} // This is Object-function


// Method to check data-type of variables

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
// null has undefined data-type

// ********************* MEMORY ALLOCATION ******************
// Memory allocation is done automatically by JS using tools like Garbage collector etc

/* Stack (Primitive) - Copy of orinal values,
 Heap (Non-Primitive) - Reference to original values, any change done affects the original valus*/

let myName = "himanshu"
let anotherName = myName;
anotherName = "chaiaurcode"
console.log (myName) ;
console.log (anotherName) ;

let user0ne = {
    email: "user@google.com",
    upi:"user@ybl"
}
let userTwo = user0ne;
userTwo.email = "hitesh@google.com";
console.log (user0ne.email) ;
console.log (userTwo.email) ;