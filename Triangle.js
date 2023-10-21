//given a,b,c of a triangle .find area if triangle is possible
//(a+b)>=c  and (b+c)>=a  and (a+c)>=b
//(a+b)>c  possible

// let a = 10;
// let b = 20;
// let c = 30;




// function fun() {
//     let a = arguments[0];
//     let b = arguments[1];
//     let c = arguments[2];
//     if (a + b > c) {
//         let s = (a + b + c) / 2;
//         let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

//     }
//     return area;
// }
// let area1 = fun(10, 20, 31);
// console.log(area1);




function fun(a = 10, b = 20, c = 30) {
    //let a = arguments[0];
    //let b = arguments[1];
    //let c = arguments[2];
    if (a + b > c) {
        let s = (a + b + c) / 2;
        var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    }
    return area;
}
let area = fun(10, 20, 29);
console.log(area);