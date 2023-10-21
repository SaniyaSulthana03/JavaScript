//if statement
//if-else statement
//if-else ladder statement
//nested if

//converting the string to the number
// let a=prompt("this is ")
// a=Number.parseInt(a)

console.log(typeof a);
let b = 10;

if (b != 10) {
  console.log("false");
} else if (b == 10) {
  console.log("above all are not true");
  //alert("this option is right")
} else {
  console.log(false);
}

//switch statements
const expr = "two";
switch (expr) {
  case "one":
    console.log("one is first number");
    break;
  case "two":
    console.log("two is second number");
    break;
  default:
    console.log("the above value is not matching");
}

//ternary operators
let marks = 5;
let mark = marks > 10 ? "morethan 10" : "lessthan 10";
console.log(mark);

//q1
let age = 16;
if (age > 10 && age < 20) {
  console.log("lies between 10 and 20");
} else {
  console.log("doesnot lies between 10 and 20");
}

//Q2
let x = 15;
switch (x) {
  case 10:
    console.log("10 years");
    break;
  case 11:
    console.log("10 years");
    break;
  case 15:
    console.log("15 years");
    break;
  default:
    console.log("does not matched the above condition");
}

//q3

let num=12;
if(num%2==0 && num%3==0) 
console.log("divisible by 2 and 3")
else
console.log("not divisible by 2 and 3")

//Q4

let drive=32
console.log(drive>10)?"can drive":"can not drive"


