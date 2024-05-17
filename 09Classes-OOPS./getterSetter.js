// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password
//     }

//     // aap Jitni bhi properties banate h unke naam se "GETTER/SETTER" automatically ban jate hai as a method
//     // Getter aur Setter hamesha sath me bante hai i.e, bas ek hi bana ke kam nahi karega
//     // 1. Getter
//     get email(){ 
//         return this._email.toUpperCase() // "email aur _email" CALL STACK SIZE EXCEED error ko rokne ke liye use karte h, as 
//         // Dono hi jagah lagatar value set hoti jati h (race lag jati hai), you can even rename as something else-> email as bmail
//     }
//     // 2. Setter
//     set email(value){ // Value ab yaha se SET hogi
//         this._email = value
//     }

//     get password(){
//         return `${this._password}hitesh`
//     }

//     set password(value){
//         this._password = value
//     }
// }

// const User_1 = new User("h@hitesh.ai", "abc")
// console.log(User_1.email);


// mine

class User {
    constructor(name, password){
        this.name = name,
        this.password = password
    }
    
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}hiamshu`.toUpperCase()
    }

    set password(value){
        this._password = value
    }

}

const User1 = new User("himasnhu", "bbaa");

console.log(User1.password);