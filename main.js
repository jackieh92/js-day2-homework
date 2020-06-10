/* Write a function that parses through the below object and displays all of their
favorite food dishes as shown:*/


let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

for (let i = 0; i < Object.values(person3).length; i++) {
    console.log(Object.values(person3)[i])
}

/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age) {
    this.name = name
    this.age = age
    this.countUp = 0

    //Method for printInfo
    this.printInfo = () => {
        return `You're name is:${this.name} You're age is: ${this.age}`
    }
    this.countUp = (function () {
        let counter = 0 // this will be our private variable
        console.log('countUp')
        return function() {  return counter++}
    })()

    //Method to print out age + 3
    this.addAge = (age = 3) => {
        return `${this.name}, you're age is: ${this.age} You will be ${this.age + age} in 3 years`
    }

}

let stanley = new Person("Stanley", 1)
let jake = new Person("Jake", 26)
console.log(stanley)
console.log(stanley.countUp())
console.log(jake.addAge())

/* Create a Promised based function that will check a string to determine if it's length is greater than 10.
If the length is greater than ten console log "Big word". 
If the length of the string is less than 10 console log "Small Number" */
const isGreater = (str_length) => {
    return new Promise((resolve, reject) => {
        if(str_length.length > 10){
            resolve(true);
        } else {
            reject(false)
        }
    } )
}

// Using a Promise

isGreater("This").then((result) => {
    console.log('Big word')
}).catch((error) => {
    console.log('Small Number')
})



