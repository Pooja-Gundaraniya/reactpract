const per =(friend, callfriend) =>
{
    console.log(`i am busy right now. i am talking to ${friend}. i will call you back`);
    callfriend();
}
const person = () => 
{
    console.log(`hey what's up i call you back`);
}
per("pooja",person);
let x= function()
{
    console.log("i am called inside a function");
};
let y = function(callback)
{
    console.log(`do something`);
    callback();
}
y(x);
//return sunction
function compare(a,b)
{
    if(a>b)
    {
        return 1;
    }
    else if(b>a)
    {
        return -1;
    }
    else
    {
        return 0;
    }
}
console.log(compare(7,8));