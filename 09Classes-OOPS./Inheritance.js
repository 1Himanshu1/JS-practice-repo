
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ // extends is syn sugar for __proto__ for inheritance
    constructor(username, email, password){
        super(username) // "super" reduces the task of .call(this, para), as it automatically calls the parent class' constructor without any said jhanjhat. it takes new this context and set with the value and gives us value that can be used in new class
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Himanshu", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);
console.log(chai === User);