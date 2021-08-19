console.log("OBJECT LITERAL");
let name = "webelight";
let course = "javascript";
let obj =
{
    name,
    course
}
console.log (obj);

console.log("\n");

console.log("PASSING PARAMETER IN OBJECT");
let n = "Student";
let obj1 = 
{
    [n + "name"] : "POOJA",
    course : "javascript",
    detail: function()
    {
        return `${this.Studentname} is student of ${this.course}`
    }
}; 
console.log(obj1);
console.log(obj1.detail());
const print_hello = (name) =>  console.log(`Hello ${name}`);
print_hello("Pooja");

console.log("\n");

console.log("ANOTHER  OBJECT SYNTEX");
let m = "Student";
let obj2 = 
{
    [m + "name"] : "POOJA",
    course : "javascript",
    detail()
    {
        return `${this.Studentname} is student of ${this.course}`
    }
}; 
console.log(obj2);
console.log(obj2['detail']());

console.log("\n");

console.log("FUNCTION RETURN VALUE AS OBJECT");
let fname = "POOJA";
let lname = "GUNDARANIYA";
let course1 = "javascript";
function student(fname,lname,course1 )
{
    let fullname = fname+[" "]+lname;
    return{fullname,course1};
}
console.log(student(fname,lname,course1));