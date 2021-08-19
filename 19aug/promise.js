 let complete = true;
 function prom(complete)
 {
 return new Promise(function(resolve,reject)
 {
     console.log("fetching data , please wait.")
     setTimeout (() =>{
     if (complete)
     {
         resolve("i am sucessfull");
     }
     else
     {
         reject("i am failed");
     }
    },2000)
    })
}
let onfulfillment = (result) =>
{
    console.log(result);
}
let onreject = (error) =>
{
    console.log(error);
}
prom(true).then(onfulfillment).catch(onreject);