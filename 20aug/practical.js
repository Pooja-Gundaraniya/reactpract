const { filter } = require("async");

let a = 1;
let b= 2;
function sum()
{
    let c = a+b;
    return c;
}
let c =sum();
console.log(c);

let sum1 = (a,b) =>{
    return a+b;
};

console.log(sum1(3,5));

//console.log("map");
//let arr = ["neel","pooja","karan"];
//console.log(filter.arr(arr.length>5));