// Object Literal

const user = {
    name: "Himanshu",
    age: 26,
    talks : function(){
        console.log("Hi, this is Himanshu");
    },
    details: function(){
        return {
            userName: this.name,
            userAge: this.age
        }
    }
}

console.log(user.name);
console.log(user.details());