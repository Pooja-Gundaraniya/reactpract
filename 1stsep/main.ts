export { }
let message = 'hello world';
console.log(message);
// variable declaration practise
let x = 10;
let y = 20;

let sum: number;
const title = 'typescript';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'pooja';
let sentense: string = `my name is ${name} i am a beginner in typescript`;
console.log(sentense)
let n: null = null;
let u: undefined = undefined;
// let new : boolean = null;
let new1: string = undefined;
let list: number[] = [1, 2, 30];
let list1: Array<number> = [1, 2, 3];
let person1: [string, number] = ['chris', 22];
enum color { red, green, blue };
let c: color = color.green;
console.log(c);
let random: any = 10;
random = true;
random = 'pooja';
let myvariable: unknown = 10;
function hasname(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}
if (hasname(myvariable)) {
    console.log(myvariable.name)
}
let multitype: number | boolean;

// function practise
function add(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5);

// function fullname(person:{firstname:string,lastname:string})
// {
//     console.log(`${person.firstname}${person.lastname}`)
// }
// let p={
//     firstname:'pooja',
//     lastname:'gundaraniya'
// };
// fullname(p);
// //interface
interface person {
    firstname: string,
    lastname: string
}

function fullname(person: person) {
    console.log(`${person.firstname}${person.lastname}`)
}
let p = {
    firstname: 'pooja',
    lastname: 'gundaraniya'
};
fullname(p);

//class

class employee {
    emplyeename: string;
    constructor(name: string) {
        this.emplyeename = name;
    }
    greet() {
        console.log(`good morning ${this.emplyeename}`)
    }
}
let emp1 = new employee('pooja');
console.log(emp1.emplyeename);
emp1.greet();

class manager extends employee {
    constructor(managername: string) {
        super(managername);
    }
    delegatework() {
        console.log(`manager delegating work`);
    }
}
let m1=new manager('pooja');
m1.delegatework();
m1.greet();
console.log(m1.emplyeename);

const increment = (counterVal:number) => 
{
    return counterVal+1
}
const counter:number =increment(10);
console.log(counter)

let ProgtammingLanguages: string[] = ['java','typescript','python','php'];
ProgtammingLanguages.push('.net')
console.log(ProgtammingLanguages)

interface Iuser
{
    name:string;
    emial:string;
    age:number;
    isMarried:boolean;
}
const fetchData =(apiurl:string):Promise<Iuser> =>
{
    return fetch(apiurl)
    .then((response)=> response.json());
}

enum cheese
{
    chedder ='chedder',
    gouda ='gouda',
    goat ='goat'
}
const serveCheese = (cheeseType:cheese,Servings:number) =>
{
    console.log(`you want ${Servings}servings of ${cheeseType}`);
};

serveCheese(cheese.chedder,3)