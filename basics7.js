module.exports = class Person //exports my class so that it can be accessed anywhere else
{
    age = 25
    
    //constructor is a method which execures by defalt when you create a class object
    constructor(firstName,lastName)//inside are called instance variables
    {
        this.firstName =firstName
        this.lastName =lastName
    }
    //this is a method
    fullName()
    {
        console.log(this.firstName+this.lastName)//concatenates
    }

    //location = "canada", one way to define it
    get location() //getter methods, gets treated as a property
    {
        return "canada"
    }

}

/*
let person = new Person("Tim","Joseph")
let person1  = new Person("Rosy","Moreno")
console.log(person.age)
console.log(person.location)
console.log(person.fullName())//access the fullName method
console.log(person1.fullName())
*/