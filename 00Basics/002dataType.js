"use strict"; // treats all JS code as newer version (ES6), defined at the top



// 1. STRING 
// '' or " "
let name = "abc";

// 2. Number
/* they have range 2 to power 53
so for bigger values are handled by 
bigint */
let num = 3;

// 3. Boolean
// true or false
let option = true;

// 4. Null
/* null represents empty value i.e here val is empty and does not containe anything
NOTE: typeof null gives Object, as its special case in JS*/
let val = null;

// 5. Undefined
let state; // the state would have undefined value as it is declared but not initialized

// 6. Symbol
/* symbols are for representing uniques values */

// 7. OBJECT
/* checkout object in website- tc39 */

console.log(typeof state);
console.log(typeof val);