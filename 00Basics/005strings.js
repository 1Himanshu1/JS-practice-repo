// 2 ways to declare Strings
let names = "himanshu";
let names2 = new String("Pri-yanshu")  // it takes NEW keyword(OBJECTS) and String and actual value in its constructor - ('')
// and it is form of key-value pairs i.e, [0]=P,[1]=r,[2]=3 etc
// it gives "Length" property and "prototype" (__proto__ mostly used method) by default
const age = 25;

// console.log(name + " age: " + age);  OUTDATED CONCATENATION
console.log(`${names.toUpperCase()} and ${names2} age: ${age}`); // STRING INTERPOLATION (placeholders for injecting variables using ${}, written inside ` bacticks `)

// console.log(names[2]); 
// console.log(names2[3]);//( key value pair in Objects)

/* ****** IMPORTANT *********** */
// use in inspect=> console for getting all the methods in string
//console.log(names.__proto__); 

// console.log(names.length);
// console.log(names.toUpperCase()); // toUppercase is a function => ()
// console.log(names.charAt(4));
// console.log(names.indexOf('h'));
// console.log(names.substring(0,5));
// console.log(names.length);
// console.log(names.slice(-8,2)); // slice can accept - values

// const str1 = "        himanshu              hello  ";
// console.log(str1);
// console.log(str1.trim()); // removes (" spaces ") and " /n ", also accepts 2 parameters trim(start,end)

const url = "https://www.google.com/hell%30o"
// console.log(url.replace('%30','-'));
// console.log(url.includes('www'));
console.log(names2.split("-"));
