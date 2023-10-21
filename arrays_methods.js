//single dimensional
//multi dimensional array
//arrays used to store morethan one value
/*let a=[1,2,3,4,5,6,7,8,9]
console.log(a)

//we can able to store different types of data like num,str,bool etc
let b=["saniya",2,false,3.0]
console.log(b)
console.log(a[0])
console.log(b[1])
console.log(b[2])
console.log("the length of the string",b.length)
//arrays are mutable
//we can able to change the value of the array
console.log(a[0])
a[0]=20   //changing the value of the array
console.log(a)
console.log(typeof(a))

//mehods of arrays 

let num=[1,2,3,4,5,6,7,8,9]
let p=num.toString()  //array to string
console.log(p)
let q=num.join('-')  //it joins the string
console.log(q,typeof(q))
//pop is used to remove the last element 
num.pop() 
console.log(num)
console.log(num.pop()) //it returns the popped element

console.log(num.push(100)) //push retuns the new array length
console.log(num.push(55))

let s=num.shift() //removes the element from he start of the array
console.log(s)

let t=num.unshift(77) //adds the elements to the beginning returns new array length
console.log(t)
console.log(num)*/

//delete the element
//delete is the operator
let num=[1,2,3,4,5,6,7,8,9,10]
console.log(delete num[0])//element space stays but empty element
console.log(num)
let num2=[21,22]
//concatenation

let num1=[11,12,13,14]
console.log(num.concat(num1))
console.log(num.concat(num1, num2))

//sort is used to sort the elements in alphabetical order
num.sort()
console.log(num)  //[ 10, 2, 3, 4, 5, 6, 7, 8, 9, <1 empty item> ]

//for sorting the elements in descending order
/*let compare=(a,b)=>{
    return b-a;
}
num.sort(compare)
console.log(num) */

//for sorting the elements in descending order
let compare=(a,b)=>{
    return a-b;
}
num.sort(compare)
console.log(num) 

//reverse
console.log(num.reverse())

//splice
num5=[1,2,3,4,5,6,7,8,9,10]
console.log(num5.splice(2,3,21,22,23))//returns deleted items
console.log(num5)
//first 2 refers to which place and second three number refers to how many elements and 21,22,23 are the new numbers which are added in the place of previous elements

//slice -->slice out a piece from an array.it creates  a new array

num6=[1,2,3,4,5,6,7,8,9,10]
let newarr=num6.slice(3)//it will return the elements after the 3 
console.log(newarr)
let newarr1=num6.slice(3,5)//it will return the elements between 3 and 5 
console.log(newarr1)










 





