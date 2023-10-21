//object--python dictionary
//number
//string
//boolean
//undefined--
//null-null is a special value that represents empty or unknown value
//data types in javaScript

//there are types of declarations
var x = 10;   //global scope
let y = 20;    //local scope
if (x > y) {
    console.log("big=" + x);
} else {
    console.log("big=" + y);

}
function fun(x , y ) {
    if (x > y) {
        return x;
    }
    else {
        return y;
    }
}
console.log(fun(x, y));

function fun(x = 100, y = 200) {
    if (x > y) {
        return x;
    }
    else {
        return y;
    }
}
console.log(fun());





