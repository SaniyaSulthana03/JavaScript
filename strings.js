//console.log("String operations");
const name='saniya';
const greeting ='good morning';
//console.log(greeting+" "+name);
let html;
html ="<h1>This is Saniya</h1>",
"<p>i am learning javaScript</p>";
console.log(html);
html=html.concat('this','str2');
//console.log(html);
//console.log(html.length);
//console.log(html.toLowerCase());
//console.log(html.toUpperCase()); 
//console.log(html[0]);
//console.log(html[2]);
console.log(html.indexOf('this'));
console.log(html.indexOf('is'));
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt('4'));
console.log(html.endsWith('</'));
console.log(html.endsWith('str2'));

//it returns boolean value
console.log(html.substring(1,5));
//prints til n-1
console.log(html.slice(-5));
//will give last five elements
console.log(html.slice(0,5));
//will give first four elements
console.log(html.includes(html.slice('is')));
//will return boolean value
console.log(html.slice(1,5));
console.log(html.split(''));
console.log(html.split('>'));
console.log(html.replace('This','i am'));



// let fruit1='orange\'';
// let fruit2='Apple';
// let myHtml=`
//              <h1>This is "my" heading</h1>
//              <p>you like ${fruit1} and ${fruit2}</p>
//              `;

// document.body.innerHTML = myHtml;







