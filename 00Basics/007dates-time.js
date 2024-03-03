// Date
let date = new Date(); // same as date.JSON
let date2 =  Date(); // same as date.toString

console.log(date);
// console.log(typeof date);
// console.log(typeof date2);
// console.log(date2);

// console.log(date2.toLocaleDateString()); // this doesnt work as date2 is not an object but is a string
// console.log(date.toString());
// console.log(date.toJSON());
// console.log(date.toLocaleString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());

// let myDate = new Date(2023,0,15); // months start from 0-index(year,month,date,hr,min,sec)
let myDate2 = new Date(2024,3,4,2,14)
// let myDate2 = new Date("2024-01-24") // another format
// console.log(myDate2.toLocaleString());
// console.log(myDate2.toDateString());
// console.log(myDate2.toLocaleTimeString());
// console.log(date.toUTCString());

// ________________ TIMESTAMPS __________________

// let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myDate2.getTime());
// console.log(Math.floor(Date.now()/1000)); // to convert into SECONDS from milliseconds and avoid decimal points

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth( ) +1); // as months are 0-indexed
console.log(newDate.getDay() );

// ++++++++ IMP ++++++++++++
let a = newDate.toLocaleString('default',{
    weekday: 'long',
})

console.log(a);