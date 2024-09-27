//object is a collection of properties

let person = {
    firstName:'Tim',
    lastName: 'Joe',
        age: '24',
    fullName : function() //adding first name and last name inside a function
    {
        console.log(this.firstName+this.lastName)    
    }    
}

console.log(person.fullName())
console.log(person.lastName)
console.log(person['lastName'])
person.firstName = 'Tim Dane'
console.log(person.firstName)
person.gender = 'male'
console.log(person)
delete person.gender
console.log(person)

//checking if gender is in the objectname
console.log('gender' in person)

console.log('***')

//print all the values of the JavaScrip object
for(let key in person) 
{
    console.log(person[key])
}