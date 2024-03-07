// #
// GLOBAL SCOPE = var
// LOCAL/BLOCK SCOPE = let, const

//var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a , b);
    
// }

// {} = scope when it is associated with function or loop

// console.log("Outer: ",a);
// console.log(b);
// console.log(c);

// #
/* in browser inspect's GLOBAL object  and your local global-var code run on node environment is DIFFERENT*/

// # 2nd Part
// function one(){
//     const username = "himanshu"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     two()
//     console.log(website);
// }

// one()


//#
// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
// }

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){ // simple function
    return num + 1
}


// #
addTwo(5); // HOISTING: throws an error, becuz we've also used a (const addtwo(5))var to store the function inside it  
let addTwo = function(num){ // also called function expression(funct stored in variables)
    return num + 2
}