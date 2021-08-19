// console.log("ARRAY DESTRUCTING");
let user=["Pooja",27,"GUNDARANIYA"];
let [noun1,age1,surname1] = user;
console.log(noun1,"\n",age1,"\n",surname1);
console.log("\n");

console.log("OBJECT DESTRUCTING");
const person =
{
    noun: "Pooja",
    surname: "GUNDARANIYA",
    age: "27", 
    start : function()
    {
        console.log('started');
    }
     
}
const {noun,age,surname,start} = person;
console.log(noun,age,surname,start); 
start()