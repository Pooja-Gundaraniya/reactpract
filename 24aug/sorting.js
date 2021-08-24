let icecream =["butter scotch","chocolate","brownie"];
function myfunction(){
    let res = icecream.sort();
    console.log(res);
    let res1 = icecream.reverse();
    console.log(res1);
}
myfunction();
const point = [40,20,10,15];
function sorting(){
    result = point.sort(function(a,b){return a-b});//by compare function
    console.log(result);
}
sorting();
function myfunction1(){
    let res3 = point.sort();
    console.log(res3);
    let res4 = point.reverse();
    console.log(res4);
}
myfunction1()
// object sorting
let fruits= [{noun: "mango", seoson:"summer",Quantity:10},
{noun: "watermelon", seoson:"summer",Quantity:2},
{noun: "apple", seoson:"winter",Quantity:40},
{noun: "banana", seoson:"monsoon",Quantity:3},
{noun: "kiwi", seoson:"winter",Quantity:15}];
let fru=()=>{ 
    let f1 = fruits.sort(function(a,b){return a.Quantity-b.Quantity});
    console.log(f1);
};
fru()

function byname()
{
    let aa = fruits.sort(function(a,b){
        var x= a.noun.toLowerCase();
        var y= b.noun.toLowerCase();
        if(x<y){
            return-1;
        }
        if(x>y){
            return 1;
        }
        return 0
    });
    console.log(aa);
}
byname();