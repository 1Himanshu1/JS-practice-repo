// ----------- 1st PART -----------------
// #
// function sayMyName(){ // function definition
//     console.log("H");
//     console.log("I");
//     console.log("M");
//     console.log("A");
//     console.log("N");
//     console.log("S");
//     console.log("H");
//     console.log("U");
// }

// sayMyName // function reference
// sayMyName() // function- call or execution

// #
// function addTwoNumbers(number1, number2){ // function defintion takes PARAMETERS
//     // not sufficient alone if user does not inputs a number
//     console.log(number1 + number2);
// }

// // addTwoNumbers(3,"a") // function call/execution takes ARGUMENTS
// addTwoNumbers(3,null)

// #
// function addTwoNumbers(number1, number2){ 

//     //1.
//     // let result = number1 + number2
//     // return result
    
//     //2.
//     return number1 + number2 
//     console.log("Hello"); // e.g, return ke bad koi code nhi chalta 
// }

// const result = addTwoNumbers(3, 5) // if u want to catch the result of a function in a variable u must RETURN the value by using return keyword (as in above example)

// console.log("Result: ", result);

// #
// function loginUserMessage(username = "sam"){ // = "sam" is to avoid the falsy condition
//     if(!username){ //here if(false value)=> return something; 
//                    // "!" written w/ any var makes any thing = false 
//                    //& (!username) is equivalent to (username === undefined) as null, " ", undefined are FALSY values
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage())
// console.log(loginUserMessage("himanshu"))


// ----------- 2nd PART -----------------

// #
// shoppping cart business logic examples
// function calculateCartPrice(val1, val2, ...num1){ // (...) = [rest or spread] operator (based on usage it is reffered as rest or spread), here it is REST
//     // also the (...num) returns the "all remaining" values in an array
//     return val1, val2, num1 // only tha last value is returned i.e, num1 
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))

// #
// const user = {
//     username: "himanshu",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)

// handleObject({
//     username: "sam",
//     price: 399
// })

// #
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray.
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500, 1000]));