// LEXICAL scope
// let init = function(){
//     let name = "Himanshu";
//     console.log(age);
//     function inner1(){ // agar function ke andar ek function hoga then inner functions ke lexical scope (var/methods) available honge - basic of Closure
//         let age = 25
//         console.log(name,age);
//     }
//     function inner2(){ // agar function ke andar ek function hoga then inner functions ke lexical scope (var/methods) available honge - basic of Closure
//         console.log(name,age);
//     }
//     inner1()
//     inner2()

// }
// init()
// console.log(name);

// CLOSURES 

// ->jb pura function hi return karte hai kahi se to us function ke sath-sath uska pura "lexical scope" bhi uske sath return hota hai

// 1.
function makeFunc() {
    const name = "Mozilla";
    
    function displayName(){
        console. log (name);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc();

// 2. refer closure.html
