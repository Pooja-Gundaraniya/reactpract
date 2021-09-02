export{}
let message:string ='welcome pooja';
console.log(message)
// let result = pass:string | fail:string ;
 enum fruit {
     mango,
     apple,
     orange
 }
 let f : number =fruit.mango;
 console.log(f)

 let myVariable:unknown=10;
 const check= (myVariable as string).toString();
 const check1=(myVariable as number).valueOf();

 console.log(check)
 console.log(check1)

 function hasname(obj:any): obj is {name:string }
 {
     return !!obj&&typeof obj==="object"&&"name" in obj
 }
 if (hasname(myVariable))
 {
     console.log(myVariable,name);
 }

  function sub(num1:number,num2:number)
 {
    return num1-num2
 };
 console.log(sub(10,5));

 function fullName(person:{firstName:string,lastName:string})
 {
    console.log(`${person.firstName}${person.lastName}`);
 }
let p =
{
    firstName : 'pooja',
    lastName : 'gundaraniya'
};

 fullName(p);

 interface vegetable
 {
     potato: string,
     tomato:string
 }
 function vege(veg:vegetable)
 {
     console.log(`${veg.potato}`)
 }
 let v =
 {
     potato:'white',
     tomato:'red'
 }
 vege(v);

 class react
 {
     course:string;
     constructor(courseName:string)
     {
         this.course= courseName;
     }
     lang()
     {
         console.log(`this is${this.course}`)
     }
 }
 let r=new react('typescript');
 console.log(r.course);
 r.lang()

 class typeScript extends react
 {
     constructor(childCourseName:string){
         super(childCourseName);
     }
     language()
     {
         console.log(`this is derived class`)
     }
 }
 let t=new typeScript('react');
t.language()
t.lang
console.log(t.course)