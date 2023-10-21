//collection of characters
//strings are used to save or manipulate the text
let name="saniya";
console.log(name)
console.log(name[0])
console.log(name[1])
console.log(name.length)
let friend='sabi';
console.log(friend)

//template literals
//template literala  use backticks instead of quotes
//we can insert variables directly in template literal.this is called string interpolation
let boy1="saniya"
let boy2="sulthana"
let sentense=`${boy1} is frnd of ${boy2}`
console.log(sentense)

//escape sequence characters
let fruit='bana\'na'
console.log(fruit)
//it will return the 7 as length because '/ act as one character
console.log(fruit.length)

// -\n- newline
// -\t- tab
// -r- carriage return

//length

let names="saniya sulthana";
console.log(names.length)
let fruits='bana\'na'
console.log(fruits.length)

//convert to uppercase string
console.log(names.toUpperCase())
console.log(names.toLowerCase())
console.log(names.slice(2,4))
//will print between 2 and 4
console.log(names.slice(2))
//will return the string niya means after 2

//replace
console.log(names.replace("san","muz"))

//concat
let name2='mil'
console.log(names.concat(name2," yes "))

//trim
//it will removes the whitespaces from starting and ending
let newname=names.trim()
console.log(newname) 


let fr="sabeela"
for(let i=0;i<fr.length;i++)
{
    console.log(fr[i])
}

//problem 4
let str="please give me 1000"
let amount=Number.parseInt(str.slice(15))
console.log(amount)
console.log(typeof amount)

//problem 5
let frnd="sabeela"
frnd[3]="a"
console.log(frnd)
//string is not change because string is immutable