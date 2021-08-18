// if condition & let
/*let x = 9;
if (x == 10)
{
    let x = 20;
    console.log(x);
}
console.log(x);*/
// diff b/w let var
/*var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);


var heading = document.getElementsByTagName('h1');

console.log(heading);
function myvar() {
    var a = 10;
    if (true) {
        var a = 20;
        console.log(a);
    }
    
}

console.log("pooja gundaraniya");
myvar();
for (let i=0; i<5; i++)
{
    setTimeout(function()
    {
        console.log(i);
    },1000);
}
for (let i=0; i<5;i++)
{
setTimeout(() => 
    console.log(i)
, 1000 );
}
let log = function ()
{
    console.log(message);
};
let message = 'hello';
log();
for (var i=0; i<5; i++)
{
    console.log("inside th loop",i);
}
console.log("outside the loop", i);

const pi =3.14;
var a = pi+1;
console.log(a);

function say(message='hi')
{
    console.log(message);
}
say();
say('hello')
function add(x,y)
{
    return x+y;
}
add(10,20);
function say(message = 'hi')
{
  //message - typeof message !== 'undefined' ? message : 'hi';
    console.log(message);

}
say();
say(undefined);
say('hello')
function creatediv(height = '100px', width ='100px', border ='solid 1px red')
var div = document.createElement('div');
div.style.height = height;
div.style.width =  width;
div.style.border = border;
document.body.appendChild(div)
return div;
creatediv(undefined,undefined, 'solid 5px blue');
function put(toy, toybox= [])
{
    toybox.push(toy);
    return toybox;
}
console.log(put('toy car'));
console.log(put('teddy bear'));
function requiredarg()
{
    throw new Error('the argument is required');
}
function add(x= requiredarg(), y=requiredarg())
{
    return X+y;
}
add(10);
add(10,20);
function add(x=1, y=x, Z=x+y)
{
    return x+y+Z;
}
console.log(add());
let taxrate =() => 0.1;
let getprice = function(price, tax = price* taxrate())
{
    return price+tax;
}
let fullprice =getprice(100);
console.log(fullprice);
function add(x, y=1, z=2)
{
    console.log(arguments.length);
    return x+y+z;
}
add(10);
add(10,20);
function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total; == "number";
    })
    .filter(function (prev , curr)
    {
        return prev+curr;
    });
}
let result = sum (10, 'hi',null,undefined,20,30);
console.log(result):
function greet(name)
{
    return 'hello' + name;
}
console.log(greet("pooja"));
let greet = (abc) => 
{
    return 'hello' + abc;
}
console.log(greet("pooja"));
const sqrt = num => 
    num*num;
    console.log(sqrt(5));
    const person =
    {
        test()
        {
            var self = this;
            setTimeout(() =>
            {
                console.log(self);    
            }, 2000);
        }
    };
    person.test();
    const abc ="pooja";
    const res = `welcome
to
    ${abc}`;
    console.log(`welcome to ${abc}: have a nice day`);
    console.log(res);
    const details =
    {
        noun: "pooja",
        contact: "7567991613"
    }
    let {noun:company_name,contact} = details;
    console.log(company_name,contact);
const arr =["a", "b","c"];
let[v1,v2,v3 ] =arr;
console.log(v1,v2,v3);
const mypromise = new Promise((resolve,reject) => {
    const a=2;
    const b=2;
    const c= a+b;
    if(c==4)
    {
        resolve(`yes, ${a} + ${b} = 4`);
    }
    else
    {
        reject(`no, ${a}+${b}!=4`);
    }
});
mypromise.then((m)=>
{
    console.log(m);
}
).catch((err) =>
{
    console.log(err);
}
)*/
const arr1 =[1,2,3,4];
const arr2 =[...arr1,6,7];
console.log(arr2);