//1.
// const tinderUser = new Object() // singleton Object
const tinderUser = {} // Non-Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//2. Objects nested into Object
// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "himanshu",
//             lastname: "bharti"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

// OPTIONAL CHAINING (STUDY LATER)
// console.log(regularUser.fullname?.userfullname.firstname);

//3. Object.assign()
/* actual blue-print ( SOURCE will be moved inside the TARGET)
const target = {a:1,b:2}
const source = {c:3,d=4}
const returnedTarget = Object.assign (target, source ) ;
console.log ( target) ;
*/

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // kinda wrong cuz it will simply return both obj as different objects into main obj
// console.log(obj3);

//const obj3 = Object.assign({}, obj1, obj2, obj4) // {} -> given as the TARGET (EMPTY OBJECT) for mitigating error cond, as it will make sure it returns an array

// const obj3 = {...obj1, ...obj2} // ++++++ MOSTLY USED (KANCH KA GLASS) ++++++++
// console.log(obj3);

//4. Database se aisi hi values aati hai -> Array of OBJECTS
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "hc@gmail.com"
    },
    {
        id: 3,
        email: "hb@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // gives an ARRAY of keys and values
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));  // har key-value pair ko Array form me bana deta hai

// console.log(tinderUser.hasOwnProperty('age')); // checks if ('property') hai ki nahi inside the object, boolean result


// ________ OBJECT DE-STRUCTURE {  } & JSON-API _________

// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "HIMANSHU"
// }

// course.courseInstructor
// const {courseInstructor} = course
// const {courseInstructor: instructor} = course
// //          property: alternate name = object name

// console.log(courseInstructor);
// console.log(instructor);

/* API (JSON format) - apna kam dusre ke sar dalna */
// e.g, 1. json key-value both are STRINGS

// i.  JSON - object like structure
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
//     // this is only for understanding structure of an API
// }

// ii. JSON - in array lif fke structure
[
    {},
    {},
    {}
]

// checkout 1. JSON formatter 2. randomapi me