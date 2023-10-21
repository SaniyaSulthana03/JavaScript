//nnssbbu
//number,null,string,symbol,boolean,bigint,undefined-->primitive data types
let a=12
let b=null
let c=Symbol("i am saniya")
let d="saniya"
let e=true;
let f=BigInt("12")+BigInt("20")
let g=undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof f)

//objects -->non primitive data types
const item={
    "sanu":true,
    "sammu":false,
    "shifu":62,
    "rohan":undefined
}
console.log(item["sammu"])

let B="sanu"
let A=15;
console.log(B+A)

console.log(typeof(A))
console.log(typeof(A+B))

const sa=20288884676757;
console.log(sa)
// const a1{
//     name:"as",
//     age:16
// }
// a1['friend']="saa"
// a1['name']="lovish"
// console.log(a1)


const dict={
    good:'gorgeous',
    bad:'worst',
    happy:'hillarious'
}
console.log(dict.bad)
console.log(dict['happy'])
