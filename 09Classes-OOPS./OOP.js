// 1. OBJECT LITERAL

// const user = {
//     name: "Himanshu",
//     age: 26,
//     talks : function(){
//         console.log("Hi, this is Himanshu");
//     },
//     details: function(){
//         // return {
//         //     userName: this.name,
//         //     userAge: this.age
//         // }
//         console.log(this);
//     }
// }

// console.log(user.name);
// console.log(user.talks());
// console.log(user.details());


// 2. CONSTRUCTOR FUNCTION

// const promise = new Promise();

// NEW makes a new context
// this NEW keyword is the CONSTRUCTOR function basically, that helps you to make multiple instances(copies) from one OBJECT LITERAL
// if we use the constructor function/object without using NEW keyword, then it will keep working and updating the same context data

/* --- Steps of New instance using NEW
1. NEW creates a new empty Object(i.e new Instance)
2. Constructor function is called becuz of NEW keyword
3. NEW packs all the arguments inside this context
4. All of this is returned
*/
let user = function(name,count,isLoggedIn){
    this.name = name; // this. represents the empty context that this function is returning currently
    this.count = count;
    this.isLoggedIn = isLoggedIn;
    this.greet = function(){
        console.log(`Welcome ${this.name}`);
    }
    return this; // byDefault it Returns Current Context implicitaly even you dont return something expicitally

}


let user1 = new user("Abc", 3, false)
let user2 = user("cde",  5, true)
// console.log(user1)
console.log(user1.constructor);
// console.log(user2)


// Read:
// 1. instanceOf