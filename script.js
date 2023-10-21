//data types in js
//dynamically typed language
// =>primitive datatype=String,null,number,Symbol,undefined,boolean
// =>reference datatype=arrays,object literals,functions,dates Etc
// string=collection of characters
let aa=3;
var bb=4;
const cc=6.7;
const d=7;
console.log(cc);
console.log(typeof(cc));
let e=true;
let f="saniya";
let g;
let h=null;
let i=Symbol("sanu");
let j=BigInt("2345");
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));
console.log(typeof(h));
console.log(typeof(i));
console.log(typeof(j));


let a=7,b=7,fact;
if(a>b)
console.log("a is greater");
else
 console.log("b is greater");

 if(a=b-1)
 if(a>b)
 console.log("a is greater");
else
 console.log("b is greater");

 if(a=b-1)
 if(a%2==0)
 console.log("a is even");
else
console.log("b is even");
else
for(let i=0; i<a; i++)

a=a*i;

console.log(a);

for(let i=0;i<5;i++){
    console.log(i);
}
for(let i=0;i<5;i++){
    console.log(i);
}

//for in loop which gives index values
let names={
    name:"saniya",
    age:19,
    work:"web developer"
};

console.log(names['name']);
console.log(names.age);
for(let obj in names){
    console.log(obj);
}

//for of loop which returns the only values

for(let ob of "names"){
    console.log(ob);
}

while(a==5)
console.log("saniya");

do{
    console.log("saniya");

}while(a==5);

function add(a,b){
    return a+b;
}
console.log(add(44,5));

const sum=(a,b)=>{
    return a+b;
}
console.log(sum(44,5));

let x=(function sub(a,b){
    return a-b;
    console.log(x);
})(44,5);

let myobj={
    name: "saniya",
    id:12,
    age:19,
    year:3,
    role:"student"
}
console.log(myobj);
