// LET
let x = 1;
if(x===1)
{
    let x=2;
    console.log(x);
}
console.log(x);
var y=2;
if(y===2)
{
    var y=3;
    console.log(y);
}
console.log(y);
//lt vs var
let a = 'global';
var b= 'global';
console.log(this.a);
console.log(this.b);
console.log(typeof a);
bla = 1;
var bla;
console.log(bla); 
bla1 = 1;
//let bla1;
//console.log(bla1); 
//const
const pi = 3.14;
if(pi==3.14)
{
//  pi=pi+1;
}
console.log(pi);
//let vs var
var c=0;
function f()
{
    var c =d=1;
}
f();
console.log(c,d);
// functional scope
var m =0;
 console.log(typeof o);
 function h()
 {
     var n = 1;
     console.log(m,n);
     function i()
     {
         m=3,n=4,o=5;
     }
     i();
     console.log(m,n,o);
 }
 h();
 //console.log(m,n);
console.log(typeof o);
// default parameter 
function sum (t=1, u=t+1, v=t+u)
{
    console.log(t+u+v);
}
//by arrow fnction
sum();
let s = (aa=1,bb=aa+1,cc=aa+bb) => aa+bb+cc;
console.log(s());
// passing function value as default value
const sum1 = () => 15;
const calculate = function(xx, yy=xx*sum1())
{
    return xx+yy;
};
const result = calculate(10);
console.log(result);
//default value
const calsi = (xx,yy=xx-sum1())=> xx+yy;//by arrow function
console.log(calsi(50));
let test = (xy=3) => {
    console.log(xy);
    test =5;
    console.log(test);
}
test(7);