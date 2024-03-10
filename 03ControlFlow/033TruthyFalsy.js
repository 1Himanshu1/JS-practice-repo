// kuch values kon "man lete hai"/ "assume" ki wo true hai -> aise values ko truthy values kehte hai
// aise values ke sath comparison krna jaruri nahi hota
// #
// const userEmail = "H@gmail.com" // truthy
// const userEmail = [] // truthy
// const userEmail = ""// falsy

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// # 
/* 
1. falsy values
->  false, 0, -0, BigInt 0n (big integer), " " -(empty string), null, undefined, NaN

2. truthy values
->  "0" - string so true, 
    'false' - string so true,
     " ", [], {}, function(){} // empty string,array,object and function all are truthy values
*/

// #
// to bypass and return the actual result in case of the empty array's truthy value in case the array is empty
// const userEmail = []
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// #
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) { // Object.keys(emptyObj) -> returns an array on which we can run length method and check as in array case
//     console.log("Object is empty");
// }

// # Trivia
// console.log(false == 0);
// console.log(false == '');
// console.log('' == 0);


// # Nullish Coalescing Operator -> (??)

//  (??): null undefined ( null aur undefined keyword ke sath hi (??) use karte hai)
/* 
many times it happens when we fetch data from DB or Firebase, the data returned isnt a simple response but maybe it returns 2 values
and chances arer that one of them would be null or undefined or nothing, so in that case we NCO
 */

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // safety check- returns 10
// val1 = undefined ?? 15 // safety check- returns 15
// val1 = null ?? 10 ?? 20 // after bypassing null, first value it get is assigned to variable

// console.log(val1);

// #
// Terniary Operator
// condition ? true f: false

const ice = 100;
ice <= 80 ? console.log("less than 80") : console.log("more than 80")