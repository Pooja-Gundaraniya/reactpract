var a = ["neel", 'pooja', 'karan', 'maitri'];
var b = a.slice(1, 3);
console.log(b);
a.splice(2, 1, 'vaidehi', 'romil');
console.log(a);
var value = null;
if (!null) {
    console.log("Hello");
}


let num1=10;
let num2=20;
let num3=30;
if(num1>num2)
{
    console.log(num1)
}
else 
{
    if(num2>num3)
    console.log(num2);
    else
    console.log(num3)
}

let result = num1>num2? num1:num2;
console.log(result)

function sum()
{
    return num1>num2? num1
    :num2>num3?num2
    :num3
}
console.log(sum());