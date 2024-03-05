// If you can use objects and events(DOM,BOM,etc) properly, u have 80% mastery over JS real usage 

/* Object declaration :
 1. Object Literals -> 
        const user = {}
 2. Constructor -> it makes singleton object(unique)       
        const user = Object.create;
*/

// Object literals

const sym = Symbol("sym")
const user = {
    name:"Himansh",
    "full name": "Himanshu Bharti", // name is treated as "name" by default
    age:26,
    [sym]:123, // proper way to use symbol as a key in an object (you will see it when u log the whole array)
    locality:"gkp",
    isLogIn:false,
    lastLogin:["Monday","Saturday"]
}

// Accessing objects
// 1. by (obj.key)
// console.log(user.age);

// 2. by obj["key"] // imp in case of 1. string keys with gasp e.g, "full name" & 2. Symbol data types
// console.log(user["full name"]); 
// console.log(typeof user[sym]); 

// 3. Changing values of keys in objects
// user.name = "Himanshu";
// console.log(user);

// 4. Restricting the changes to any objects
// Object.freeze(user)
// user.name = "Pryanshu";
// console.log(user);

// 5. in JS functions are treated as TYPE-1 CITIZENS i.e, they can be treated as variables too

user.greeting = function(){
    console.log("Hello World");
}
console.log(user.greeting); // function is still not executed, only its reference is given
console.log(user.greeting()); // ()=function is executed here

// Referncing to any key in the same objects

user.greetingTwo = function(){
    console.log(`Hello ${this.name}`); // this. lets u use the given "user"-objects property
}
console.log(user.greetingTwo());