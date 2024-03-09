// const user = {
//     name: "himanshu",
//     price: 99,
//     welcome: function(){
//         console.log(` ${this.name}, welcome to this site!`);
//         console.log(this);
//     }
// }

// user.welcome()
// user.name = "Sam"
// user.welcome()

// console.log(this); // becuz in node environment, global object/context is empty whereas in websites browser it is Window object

// this can be used int d=funcgion
function add(){
    console.log(this);
}
add()

const chai = () => {
    let userName : "hinn",

}