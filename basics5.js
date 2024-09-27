const Person = require('./basics7') // import the class from basics7.js

day = 'Tuesday '
console.log(day.length) //8 characters
let subDay = day.slice(0,4) //Tues
console.log(subDay)
console.log(day[1]) //u

//tue day
let splitDay =day.split("s")
console.log('**')
console.log(splitDay[1].length) //day and a whitespace, so length is = to 4
console.log(splitDay[1].trim().length) //the array is because the first string is put there so we will get "day" for the 1st string, [0] would be Tue. trim removes whitespaces to the right and left

let date = '23'
let nextDate = '27'

let diff = parseInt(nextDate) - parseInt(date) //we wanna know the diff of how many days between those two dates
console.log(diff)
diff.toString()

//concatenation
let newQuote =day+ "is Funday" //Tuesday is Funday [16 characters]
console.log(newQuote)
let val = newQuote.indexOf('day',5) //where is day indexed at? 4 line 1
console.log(val) //logs all 14 characters

//tuesday is funday, we wanna know how many times the word "day" is present
let count = 0
let value =newQuote.indexOf("day")
while(value!== -1) //if day is not found in the entire string the output is -1
{
    count++ //2
    value =newQuote.indexOf("day",value+1)//as you have already found the 4th index, repeat the search until it returns false
    
}    
console.log(count)//tells you how many times day occured in your complete string

//using our object from the Person class in basics7.js
let person =new Person("Chris","Edward") 
console.log(person.fullName())