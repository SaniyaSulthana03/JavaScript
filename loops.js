//for loop
//while
//do while
//for in
//for of

// for(let a=0;a<5;a++) {
//     console.log(a);
// }
let fact,n=5;
n=Number.parseInt(n);
for(let i=1;i<n;i++){
    //let fact,n=5;
    console.log(fact=fact*n);
}
console.log(fact);

let obj={
    saniya:90,
    sulthana:50,
    shaik:40,
    rithika:20
}
for (let a in obj)
{
    console.log(a);
    console.log(obj[a]);
}
//for arrays 
 for (let b of "saniya")
 {
    console.log(b);
    console.log(obj[b]);

 } 

 
let c=5;
let i=0;
while(i<5){
    console.log(i);
    i++;
}


//dowhile
do{
    let i;
    console.log(i);
    i++;
}while(i<1);


