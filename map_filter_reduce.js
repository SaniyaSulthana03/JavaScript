//modern javascript methods
//map-->creates a new array by performing some operations on each array 
//map -->creates new array where as foreach runs but not create the     
let arr=[45,23,21,45,67]
let a=arr.map((value,index,array)=>
{
    console.log(value,index,array)  // it reurns the value and index   //if we include array then it will print the array too
    //return value+1   //it adds the one to all the elements
    return value+index  //it adds the its index  to all the elements   o/p:[ 45, 24, 23, 48, 71 ]
})
console.log(a)


//filer method  -->filters an array with values that passes a test and creates a new array
let arr1=[45,73,81,40,67]
let a2=arr1.filter((b)=>{return b>50})   //it returns the values which are greaterthan 50
console.log(a2)

//reduce method -->reduce an array to single value
let arr2=[45,73,81,40,67]
let c=arr2.reduce((h1,h2)=>{ return h1+h2})//it will add the total elements  o/p=306
console.log(c)

let arr3=[45,73,81,40,67]
let d=arr3.reduce((h1)=>{ return h1})//it gives the first value    o/p=45
console.log(d)

let arr4=[45,73,81,40,67]
let e=arr2.reduce((h1,h2)=>{ return h1*h2})//it will multiply the total elements  o/p=713107800
console.log(e)

/*//problem 1
//create an array of numbers 
let ar1=[1,2,3,4,62]
let a1=prompt("enter a number")
a1=number.parseInt(a1)
ar1=push(a1)
console.log(ar1)

//problem 2
//keep adding numbers to the array until 0 is added to the array
let ar4=[1,2,3,4,62]
do{
let a4=prompt("enter a number")
a4=number.parseInt(a1)
ar1=push(a1)
}while(a4!=0)
console.log(ar4)*/

//problem 3
//divisible by 10
let ar5=[1,2,3,4,62,60]
let a5=ar5.filter((x)=>{ return x%10==0})
console.log(a5)


//problem 4
//square of the numbers
let ar6=[1,2,3,4,62,60]
let a6=ar5.map((x)=>{ return x*x})
console.log(a6)


//problem 5
//use reduce to calculate factorial of a given number from an array of first n natural numbers
let ar7=[1,2,3,4,5]
let a7=ar7.reduce((x1,x2)=>{ return x1*x2})
console.log(a7)










