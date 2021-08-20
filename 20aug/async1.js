//how to reduce delay problem
let data =1;
console.log(data);

data =2;
setTimeout(() =>{
console.log(data);
},3000);

data = 3;
console.log(data);
//
let data1 = new Promise((resolve,reject) =>
{
    setTimeout(()=>
    {
        resolve("data has been executed");
    },2000)    
})
data1.then((item)=>
{
    console.warn(item)
})
console.log("hello");      
//promise.all
let p1 = new Promise ((resolve,reject) =>
{
    setTimeout(() =>
    {
        console.log("the first promise has resolved");
        resolve(10);
    },1000);
});
let p2 =new Promise((resolve,reject) =>
{
    setTimeout(() =>
    {
        console.log("the second promise has resolved")
        resolve(20);
    },2000);
});

Promise.all ([p1,p2]).then((result) => {
    console.log(`result:${result}`);
}).catch((error) => {
    console.log(`error: ${error}`);
});

// async
 let test = async () => "hello";
 test().then((resul) =>
 {
     console.log(resul);
 })
//await
async function test1()
{
console.log("2 : message");
await console.log("3 : message");
console.log("4 : message");
}
console.log("1 : message");
test1();
console.log("5 : message");