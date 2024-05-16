// ADVANCE OBJECT - propertyDescriptor

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")  // -  "Object.getOwnPropertyDescriptor(object, "key")"
    // here Math is an Object and "PI" is a key(i.e, property) inside Object
// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // as "PI"s writable prop is switched to false we cannot change its value

// const myObj = Object.create(null);
// console.log(myObj);


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // it will give properties of a single "name" key/prop

Object.defineProperty(chai, 'name', {    // "Object.defineProperty"(chai, 'name', {w,e,...})- is used to define "hidden properties" of prop inside Objects 
    writable: false, // prevents changing on the Objects' Entry/property
    enumerable: false, // prevents looping on the Objects' Entry/property
    
})

// Object.defineProperty(chai, "name", {writable: false})
chai.name = "coffee";

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {  // we're using "Object.entries(chai)" as Objects cannot be iterarted normally like arrays by giving its name only

                                                    // for (let key of Object.entries(chai)) { //acceptable syntax but it will give all values separated with ,
    if (typeof value !== 'function') { // check to prevent printing functions 
        
        console.log(`${key} : ${value}`);
    }
}