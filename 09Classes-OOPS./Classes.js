// ES6

class User {   
    // new use karke jaise hi naya object is class se initialize hoga, constructor func call hota hai
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123") // new function call to constructor call hoga

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// Behind the scene of above code based on prototypal behavior

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }


// const tea = new User("tea", "tea@gmail.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());