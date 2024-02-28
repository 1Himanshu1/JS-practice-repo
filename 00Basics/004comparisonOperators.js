// Comparison : <,>,<=,>= (NOTE:- Comparison op changes null to data-type that they are being compared to (here number) while comparison)
// Equality Check : ==,!=,=== (NOTE:- while equality check does not do that changing of data type of null and undefined)

// console.log("2">1);
// console.log("2"==2);
// console.log("2"===2);


// Check the above NOTE for the inconsistent o/p for below code
// console.log(null>0); // 0>0 false
// console.log(null>=0); // 0 >= 0 true
// console.log(null==0); // null != 0 therefore false

// console.log(undefined ==0);
// console.log(undefined <0);
// console.log(undefined >0);
// console.log(undefined >= 0); // undefined gives false with every comparison op

// Strict Equality CHeck ( === )
// Check data type also 
console.log("2"===2);

