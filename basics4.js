//block of code
//var - global level/functional
//let - global or block level {}
//const - cannot be reinitialized

var greet = "Evening"
// const greet = "Night", will fail

if  (1==1)
{
    let greet = "Afternoon"
}

function add(a,b)
{
    var greet = "Morning"
    return a+b
}

let sum = add(2,3)
console.log(greet)

//do not have names and we call the annonymous functions/expressions

let sumOfInt = function(c,d)
{
    return c+d
}

//the same function can e
let sumOfNumbers = (c,d)=> c+d
//sumOfNumbers(2,3) or v
console.log(sumOfNumbers(2,3))
console.log(sumOfInt)