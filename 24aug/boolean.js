var a=0;
var b=20;
var result = Boolean(a);
console.log(result);

const yes = b>a;
const no = false;
if (yes){
    console.log("this code block will be executed");
}
else {
   console.log("this code block will not be executed");
}

var c = Boolean(a+b);
console.log(c);

 var bool =new Boolean(false);
 if (bool){
 console.log(bool);
 }

 var b1 = new Boolean(true);
 var b2 = true;
 console.log(typeof b2);
 console.log(typeof b1);

 let res = (1<2);

 let res1 =res.valueOf();
 console.log(res1);
 let res2 =res.toString();
 console.log(res2);
 let res3 =res.toLocaleString();
 console.log(res3);

 // variavle scope
 //block scope
 {
     let x=2;
 }
 //console.log(x);//x is not defind
 {
    var y=2;
}
console.log(y);//prints y
// local scope
function myfun()
{
    let carname ="volvo";
    console.log(carname);
}
//console.log(carname);//cannot use carname
myfun();

//global scope
let a2= 'hello';
function myfun1()
{
    a2=3;
}
console.log(a2);
myfun1();
console.log(a2);
 var locals = {
     europe : function () {
         var myfriend ="pooja";
         var france = function(){
             var paris = function(){
                 console.log(myfriend);
             };
             paris();
         };
         france();
     }
 };
locals.europe();

let i = 2;
var resu;

for(j=1;j<=10;j++)
{
    resu = i*j;
    console.log(`${i}*${j}=${resu}`);
}
