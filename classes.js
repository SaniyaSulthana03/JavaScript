class Emp{
    constructor(a,b){
        this.a=a;
        this.b=b;
        console.log("object is constructed");
    }
}
let emp1=new Emp(10,20);
let emp2=new Emp(20,30);
console.log(emp1.a+" "+emp1.b);
console.log(emp2.a+" "+emp2.b);
