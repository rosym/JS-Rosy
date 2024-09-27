var marks = Array(6)
var marks = new Array(20,40,35,12,37,100)

var marks =[20,40,35,12,37,100]
subMarks = marks.slice(2,5) //will sice the array from 35 to 37, selects index 5 to give room to print 37
console.log(subMarks)

console.log(marks[2]) //35
marks[3] = 14
console.log(marks)//[20,40,35,12,37,100]
console.log(marks.length)//6
marks.push(65)//appends to the end
console.log(marks)//[20,40,35,12,37,100,65]
marks.pop()//deletes 65
marks.unshift(12)//adds element to beginning of array
console.log(marks) //[12,20,40,35,12,37,100]
console.log(marks.indexOf(100)) //6, from the array above since it's the latest most modified version
//is 120 in the array?
console.log(marks.includes(120))
//will sice the array from 35 to 100
var sum =0
for(let i =0;i<marks.length;i++) //iterate over the array
{
    sum = sum + marks[i]//32+40
}
console.log(sum)
//reduce filter map, mostly used for sum or subtractions
console.log("*")

let total = marks.reduce((sum,totalMarks)=>sum+totalMarks,0)
console.log(total)

console.log("**")


var scores = [12,13,14,16] //print only even numbers
//goal: create a new array with even numbers of scores array [12,14,16] ...cont and multipy each value by 3
//cont, and sum them

var evenScores =[]
for(let i =0;i<marks.length;i++) //iterate over the array
{
    if(scores[i]%2 == 0)
        {
            evenScores.push(scores[i])
        }
}

console.log("***")

//returns a new array that matches the condition given
console.log(evenScores)
let newFilterEvenScores =scores.filter(score=>score%2==0) //creates a new array where the new array is then 
console.log(newFilterEvenScores) // [ 12, 14, 16 ] now and should be below 36,42,48

console.log("**~~*")

//map array funcion modifies each value in the array to a new value
//does something to each element in the array
let mappedArray = newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)
let mappedTotal = mappedArray.reduce((sum,mappedTotal)=>sum+mappedTotal,0)
console.log(mappedTotal)

//chaining so that we do not have to write hella lines of code
var scores1 =[ 12, 14, 16 ]
let sumValue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,mappedTotal)=>sum+mappedTotal,0)
console.log(sumValue)

//sorting
let fruits=["banana","mango","pomegranate","guava"]

console.log(fruits.sort())
console.log(fruits.reverse())

var scores1 = [ 12,003,19,16,14 ]

/*
console.log(scores1.sort())
scores1.sort(function(a,b){
    return a-b
})
*/    

//b-a or a-b to show ascending and reverse order/descending
console.log(scores1.sort((a,b)=> b-a))