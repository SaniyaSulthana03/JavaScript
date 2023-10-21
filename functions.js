let a=1;
let b=2;
let c=3;
console.log(avg(b,c));
console.log(avg(c,a));
console.log(avg(a,b));
function avg(x,y){
    return Math.round((x+y/2)*2);
}

let p=5
let q=8
const sum = (p,q)=>{
    return p+q
}
console.log(sum(p,q));

const hello=()=>{
    console.log("hello javascript")
    return "hi"
}
let v=hello();
console.log(v);


//1)practise questions
let marks={
    saniya:50,
    sruthi:60,
    rani:49,
    preethi:59
};
for(let  i=0;i<Object.keys(marks).length;i++){
    console.log(Object.keys(marks)[3] +"are" +marks[ Object.keys(marks)[3]]);

}


//2) problem 2

for (let i in marks) {
    console.log(i + marks[i]);
}

for(let key in marks) {
    console.log("the marks of"+key+"are"+marks[key]);
}

//3 - problem 3

// let current_number=5;
// let i
// while(i!=current_number)
// {
//     //i=prompt("enter a number");
// }
// console.log("you entered a corect number");


//4) problem 4
//to find out the mean of 5 numbers
const mean=(a,b,c,d,e)=>{
    return((a+b+c+d+e)/5);
}
console.log(mean(2,5,4,6,8));





