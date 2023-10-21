let num=[3,45,78,95,12]
for(let i=0; i<num.length; i++)
{
    console.log(num[i])
}

//const a=[1,2,3]
//..forEach((value,index,array)=>{
    //logic  })
num.forEach((element)=>
{
    console.log(element * element)
})

//array.from-->used to create an array from any other object
let name="saniya"
let arr=Array.from(name)//it converts fron string to array
console.log(arr)


//for-of

for(let i of num) { // it is the shortcut of for loop
    console.log(i)
}

for(let i in num){  //it returns the keys
    console.log(i)
}