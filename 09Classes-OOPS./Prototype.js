// let myName = "Uhsnamih ";

// String.prototype.trueLength = function(){
//     console.log(`${this} + ${this.length}`);
//     console.log(`True length is: ${this.trim().length}`);
// }

// myName.trueLength();

// myName = "hitesh     "
// let mychannel = "chai     "

// console.log(mychannel.trueLength());


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }

// // heroPower.hitesh()
// // myHeros.hitesh()
// // myHeros.heyHitesh()
// // heroPower.heyHitesh()




// //Innheritance

// // 1. Prototypal Inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // proto is used for INHERITANCE from TeachingSupport
}

Teacher.__proto__ = User // INHERITANCE from user

console.log(`${Teacher} , ${TASupport}`);
// // 2. Modern syntax

// Object.setPrototypeOf(TeachingSupport, Teacher) // new way to give/set new Prototype to any object,string,function

// let anotherUsername = "ChaiAurCode     "

// // String.prototype.trueLength = function(){
// //     console.log(`${this}`);
// //     console.log(`True length is: ${this.trim().length}`);
// // }

// anotherUsername.trueLength()
// "hitesh".trueLength()
// "iceTea".trueLength()

// // Jisne call kiya wahi this ka context hai