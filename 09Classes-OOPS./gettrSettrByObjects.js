// Objects use karte hue

const User = {
    _email: 'h@hc.com', // _ me4ans it is a private propoert
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User) // Object.create is a afactory func to create a object
console.log(tea.email);