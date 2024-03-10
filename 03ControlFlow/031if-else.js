// #
// if
// const isUserloggedIn = true
// const temperature = 41

// if ( temperature <= 40 ){
//     console.log("less than 40");
// } else {
//     console.log("temperature is greater than 40");
// }

// console.log("Execute");

// #
// Comparison OPerator (used for comparing 2 values in if i.e, answer/result true aana chahiye to enter in if loop)
// <, >, <=, >=, ==, !=, === (value and type check), !==

// #
// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // scope issue with let, const power

// # 
// const balance = 1000

// 1. ShortHand Notation:
// if (balance > 500) console.log("test"),console.log("test2"); // implicit scope, do not use, less readable ( ";" is necessary to tell where to end the function)

// 2. else-if ladder 
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");
// }

// #Multiple condition check --> And(&&), OR(||) -> LOGICAL Operator (basics of Conditional rendering => token is used here)
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allowed to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User is logged in");
}