console.log("iterators");
let numbers = [100,200,300,400];
let iter = numbers[Symbol.iterator]();
iter.next();
console.log("second element");
console.log(iter.next());
console.log("third element");
console.log(iter.next().value);

console.log("\n");

console.log("while loop with iteratos");
let num = [1,2,3,4,5,6];
let itr=num[Symbol.iterator]();
let result = itr.next();
while(!result.done)
{
    console.log(result.value);
    result = itr.next();
}