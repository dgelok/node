

// var greeting = [1,4,6,8,9]

// module.exports.greeting = greeting

// var myObject = {
//     firstName = 'Daniel',
//     lastName = "Dolan"
// }

// module.exports.anObject = myObject

class Person () {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    greeting = () => {
        console.log(`${this.firstName}, ${this.lastName}`)
    }
}

module.exports.person = Person;
