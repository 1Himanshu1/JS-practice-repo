// # THIS 
const user = {
    name: "himanshu",
    price: 99,
    welcome: function(){ // this -> current context ko refer krta hai(data inside the curly braces)
        console.log(` ${this.name}, welcome to this site!`);
        console.log(this);
    }
}

// user.welcome()
// user.name = "Sam"
// user.welcome()

// console.log(this); // => {}, becuz in node environment, global object/context is "empty" whereas in websites browser it is "Window" object



// # ARROW function

// # This in Functions
// this can NOT be used in a function properly
// in function, this. have many values but it can't access the values properly
// it can only work when it is used in OBJECT's context
// e.g, 
function chai(){
    let userName = "Himanshu"
    console.log(this.userName);
}
// chai() // returns undefined, it cant access userName as it is not inside an OBJECT,

// # ARROW function [ () => {} ]

// 1.
// const arrow = function (){
//     let userName = "Himanshu"
//     console.log(this.userName);
// }
// arrow()

// 2.
// const arrow = () => {
//     let userName = "Himanshu"
//     console.log(this);
// }
// arrow()

// 3. Basic (Explicit return, return keyword is used) // yaha ek SCOPE OPEN ho jata hai
// () => {}  basic arrow function, return statement is used when { } is used
const add = (num1,num2) => {
    return num1 + num2 
} // holding it in a variable
// console.log(add(2,4));

// 4. Implicit return // no return statement, curly me return likhna hai, aur brackets me return nahi likhna
// const sub = (num1,num2) =>  num1 - num2;
// const sub = (num1,num2) =>  (num1 - num2); // same as above
// console.log(sub(6,2));

// 5. Returning an OBJECT from arrow function
// we have to use ( ), and inside it we can pass our object
// e.g,
const obj = () => ({userAge: 22}) // equivalent to const obj = () => { return {userAge: 22}}
console.log(obj());


// # Question:
// Why This keyword can't be used in Arrow function object Methods but we can use This keyword in function declaration in object Method ?

const car = {
  model: 'A1',
  dis: 23,
  time: 10,
  speed1 () {
    console.log(this);
    return this.dis / this.time;
  },
  speed2 : () => {
    console.log(this);
    return this.dis / this.time;
  },
};

// console.log(car.speed1());  // working giving car obj 
// console.log(car.speed2()); // Giving window obj

/* 
The behavior arises due to how regular functions and arrow functions handle the this keyword:

Regular Functions:

Regular functions (function keyword) have their own this binding, which is determined by the context in which they are called. When a regular function is invoked as a method of an object (like speed1() in your example), this is bound to the object that called the method. This behavior allows regular functions to be context-aware and adapt to different object contexts.
Arrow Functions:

Arrow functions (=> syntax) do not have their own this context. Instead, they inherit the this value from the surrounding lexical context (the context in which they were defined). This means that the value of this inside an arrow function is determined by where the arrow function is written, not how it is invoked. In your example, since speed2 is an arrow function defined within the global scope, it captures the global this, which is typically window in a browser environment.
So, the difference in behavior arises because regular functions and arrow functions handle this binding differently. Regular functions bind this dynamically based on how they are called, while arrow functions inherit this from their surrounding lexical scope.
*/