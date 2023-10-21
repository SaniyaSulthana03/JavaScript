let arr = [100, "aruna", true, 10.45, undefined, null]
//can have diff data types
for (let i = 0; i < arr.length; i = i + 1) {
    console.log(arr[i]);
}



for (let x of arr) {
    console.log(x + " ");
}


for (let x in arr) {
    console.log(x + " ");
}

//arrow operator
arr.forEach((x) => {
    console.log(x + "");
}); 

// arr.forEach(Function(x)  {
//     console.log(x + "");
// });

// arr.forEach((x)=>{
//     console.log(x+"");
// });

/* for(let i=0;i<n;i++) print a[i]
for(let i of a)    print i
a.forEach(function(i) { print});
a.forEach((i)=>{print i}); */

const names=["jeevan","saad","yogitha","shubham",["saniya"]];
console.log(names);
//array operations

console.log(names[2]);
console.log(names.length);
console.log(Array.isArray('saas'));
names[4]='sulthana';
console.log(names);
 arr[0]='shaik';
 let arrelement=arr[0];
console.log(arrelement);




//another wy to create array
const arrays=new Array(10,20.0,"java");
console.log(arrays);

let marks=[50,90,78,95,99];
console.log(marks);
let value=marks.indexOf(90);
console.log(value);
//modifying arrays
marks.push(100);
console.log(marks);
//100 added at the end of thearray
marks.unshift(10);
console.log(marks);
//to add the elements in the start of the array
marks.pop();
console.log(marks);
//to remove the elements in the end
marks.shift();
console.log(marks);
//to remove an element in the start of the array
marks.splice(2,2 );
console.log(marks);
//first 2 for index and second 2 for length or no of elements
marks.reverse();
console.log(marks);
let marks2=[1,2,3,4,5];
marks=marks.concat(marks2);
console.log(marks);


