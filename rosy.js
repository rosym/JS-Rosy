//Create an array called expenses that contains at least 5 different expense amounts.
//Calculate the total expenses by summing all the elements of the array.
//Find the highest and lowest individual expenses within the array.


var expenses = [20,10,222,80,100]
console.log(expenses)

var sum=0
for (let i=0;i<expenses.length;i++)
{
    sum =sum +expenses[i]
}
console.log(sum)
console.log(expenses.sort((a,b)=> b-a))
console.log(expenses.sort((a,b)=> a-b))

//Exercise 2. Self explanatory

var studentNames = ["John","Nick","Derek","Peter","Ben"]
console.log(studentNames)
studentNames.unshift("Annie") //adds her to the beginning of the array
console.log(studentNames) 
studentNames.pop() //remove the last student
console.log(studentNames) 
console.log(studentNames.sort()) //sort


