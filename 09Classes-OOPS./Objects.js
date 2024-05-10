// Note : Everything in JS is technically is an Object
// i.e, everthing is made out of objects and objects methods get passed onto them as JS follow prototypal inheritance
// even functions are Objects technically, so are Arrays, Strings etc 
//  Objects' Proto is null as it is end point actually
// proto inheritance checks above till it reaches a null value for inheritance

// function multipleBy5(num){

//     return num*5
// }

// multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power); // Func is an Object also
// console.log(multipleBy5.prototype); // Objects' Proto is null by default,
// // NOTE : .prototype gives methods as well as internal properties (i.e, this context) 

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`price is ${this.score}`);
// }

// const chai = new createUser("chai", 25) // NEW is important as it allows new prototype properties(increment,printMe) to be added into the Object/Functions and we ca access it properly
// const tea = createUser("tea", 250) // without NEW we canr access the new proto properties

// chai.printMe()


// JS NEW keyword ke through constructor func deti hai na ki classes

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the 
creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


const emp = function(name, salary){
    this.name = name
    this.salary = salary

    // return this
}

emp.prototype.increment = function(inc){
   let newSalary = inc + this.salary;
   return newSalary
};

const emp1 = new emp("Himanshu", 400000);

console.log(emp1);

console.log(emp1.increment(20000));