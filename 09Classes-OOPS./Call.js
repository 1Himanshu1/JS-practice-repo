function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    // call(this, para) =>  call current execution context ko kisi aur function ko pass kar deta hai
    //SetUsername() cant call the other reference propoerly inside any other function
    // we have to use .call(this, parameter) -> to properly hold the reference (all the var and context) of the called function inside the new function
    // .call(THIS, para) -> yaha pe this new "function ka context" dene ke liye bhejte hai, taki jo change ho wo naye function call me persist kare
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);