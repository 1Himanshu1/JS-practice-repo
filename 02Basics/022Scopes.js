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

// #
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// // one()

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         // console.log(username + website);
//     }
//     // console.log(website);
// }

// // console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }



// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }