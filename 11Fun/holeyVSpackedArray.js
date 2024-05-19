// JS Engine optimization Concepts
 // JsVU
const myArr = []
%DebugPrint(myArr); // v8-debug engine runs this
 
// Types of Arrays
// 1.Continious( or packed i.e, no missin ele), 2.Holey(missing elements) array

// Types of Elememnts in Arrays
// - SMI (small integer) - not even decimal allowed
// - Double (float, sting, function)
// - Packed element

// ek bar downgrade home ke bad firse optimized form me nahi le jaya ja skta

const arrTwo = [1, 2, 3, 4, 5];
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo [10] = 11
// HOLEY_ELEMENTS (as there are empty 8,9,10 ele - which returns "undefined"-costly op)

// Costly Operation checks :- 
// bound check
// hasOwnProperty(arrTwo, 9) (Normal checks ends here)

//  ---- but holey checks moves further checking for return
//  thus REDUCING OPTIMIZATION
// hasOwnProperty(arrTwo. prototype, 10)
// hasOwnProperty(Object. prototype, 10)

// ---- holes are very expensive in js

// OPTIMIZED ARRRAY RANKING
// SMI> DOUBLE> PACKED
// HOLEY_SMI> HOLEY_DOUBLE> HOLEY_PACKED

// ek bar downgrade home ke bad firse optimized form me nahi le jaya ja skta

// REAL USE-CASE EXAMPLE

const arrFour = new Array(3);
// just 3 holes at first therfore it gets demoted to Holey_SMI.
arrFour[0] = '1' //HOLEY_ELEMENTS
arrFour[1] = '2' //HOLEY_ELEMENTS
arrFour[2] = '3' //HOLEY_ELEMENT

// ALTERNATIVELY we can Optimize it by using []

const arr = [] // no empty holes created so no downgradation
arr.push('1') //PACKED_ELEMENT
arr.push('2') //PACKED_ELEMENT

const arrSix = [1, 2, 3, 4, 5]
arrSix.pusht(Infinity) // makes it Packed_double
arrSix.pusht(NaN) // makes it Packed_double

// for, for-of, forEach.. etc - are more optimized than your defined loops
// so prefer using predefined function rather than writing your own loops