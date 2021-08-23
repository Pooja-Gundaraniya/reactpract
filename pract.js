function myfun(x,y)
{
    if(y===undefined)
    {
        y=2;
    }
    return x*y;
}
// console.log(myfun(4));
//arrow function
let arr =(xx,yy) =>
{
    if(yy===undefined)
    {
        yy=2;
    }
    return xx*yy;
}
// console.log(arr(4));
const array = [4,8,9,15];
const findmax =(array)=> {
    let a = 0;
    for(let i=0;i<array.length;i++) {
        if(array[i] > a) {
            a = array[i];
        }
    }
    return a; 
}
console.log(findmax(array));
console.log(Math.max(...array));
