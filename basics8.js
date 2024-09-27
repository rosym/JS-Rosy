// Inheritance, one class inherits the properties, and methods of another class
// the class which inherits the properties is known as a subclass 
// the class whose properties are inherited is known as a superclass

//extends helps achieve inheritance from the basics7.js file
//here we dont have any logic for the first and last name. Just because we are extending the class we are able to use it
const Person = require("./basics7")
class Pet extends Person


{   
    get location()
    {
        return "BlueCross"
    }
    constructor(firstName,lastName)
    {
    //it is required to call the parent class constructor
    super(firstName,lastName)
    }

}

//creating an object wich users this: constructor(firstName,lastName) from basics7.js
let pet =new Pet("sam","san")
pet.fullName()
console.log(pet.location)//But why does it print "Canada" if Location is capitla L in line 12?