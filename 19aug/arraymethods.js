console.log("map method");
var arr =[10,20,30,40];
console.log("existing array",arr);

var b= arr.map(test);
console.log("new array after mapping",b);
function test(x)
{
    return x * 10;
}

console.log("\n");

console.log("filter method");
 var ages = [10,18,20,25];
 console.log("ages are " + ages + "\n" );
 var b = ages.filter(checkadult);
 console.log("ages above 18 are" +b);
 function checkadult(age)
 {
     return age >= 18;
 }

console.log("\n");

 console.log("foreach method");
 var a = ["a","b","c","d"];
 a.forEach(function(value)
 {
     console.log(value);
 }
 )

 console.log("\n");

 console.log("reduce method");
 const numbers = [1,-1,2,3];
 console.log("Array is "+numbers);
 const sum= numbers.reduce((acc,curr) =>
 {
     return acc+curr;
 },0);
console.log("sum is "+ sum);

console.log("\n");

 console.log("sort method");
 var names = ["karan","pooja","neel","maitri","amar"];
 console.log("array is "+names);
  names.sort();
 console.log("array after sorting "+"\n"+names); 
 names.reverse();
 console.log("array after reverse sorting "+"\n"+names);

 console.log("\n");

 console.log("array of object");
var stu =[
    {noun2 : 'pooja', age : '15'},
    {noun2 : 'karan', age : '20'},
    {noun2 : 'neel', age : '30'},
];
for(var d=0; d<stu.length;d++)
{
    console.log(stu[d].noun2+stu[d].age);
}