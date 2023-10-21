// function fun(x, y) {
//     if (x > y) {
//         return x;
//     }
//     else {
//         return y;
//     }
// }
// console.log(fun());


// function fun(x = 100, y = 200) {
//     return x + y;
// }
// let z = fun();


function fun() {
    let n = arguments.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}
let a = 20;
let b = 30;
let c = 50;
console.log(a, b, c);
//console.log("sum=" + sum);
let res = fun(a, b, c);
console.log("sum=" + res);

