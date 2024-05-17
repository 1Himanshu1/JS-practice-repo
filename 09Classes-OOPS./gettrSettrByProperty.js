// defineProperty ka use karke

function User(email, password){
    this._email = email;
    this._password = password
// as function are also OBJECTS as well as Function so we can use Objects power in functions also
    Object.defineProperty(this, 'email', { // defineprop - getter/setter ki property hai
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);