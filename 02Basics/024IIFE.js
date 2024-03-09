// IIFE -> Immediately invoked function expressions
/* 
1. Used to run DB connection file immediately
2. To prevent global scoped variables from polluting insides of a function ( so this are run immediately so as to give the var in function their required values)  
*/
// syntax
// (Function defintion) (function Execution), e.g,

// ( function add(n,m){console.log(n+m)} ) ( 5,3 ) // function without termination(where to end the context), i.e, ";" can prevent other IIFE from running due to lack of End of context

( function add(n,m){    // Note : this is a NAMED IIFE
    console.log(n+m)} ) ( 5,3 ); // ";" helps to put an END to current context so other IIFE can run properly. 


( function (n,m){// UNNAMED IIFE
    console.log(n-m)} ) ( 5,3 ); // semi-colon is a must in multiple IIFE

( (user) => { // UNNAMED IIFE
    console.log(`DB connected by, ${user}`)
} ) ('himanshu')

