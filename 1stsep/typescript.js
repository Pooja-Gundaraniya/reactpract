// const increment = (counterVal) => 
// {
//     return counterVal+1
// }
// const counter =increment(10);
// console.log(counter)

// let ProgtammingLanguages = ['java','typescript','python','php'];
// ProgtammingLanguages.push('.net')
// console.log(ProgtammingLanguages)

// const fetchData =async (apiurl) =>
// {
//     const response = await fetch(apiurl);
//     return await response.json();
// }
// document.getElementById('btnsubmit').addEventListener('click',add)
// var carinfo =
// {
//     make: 'make',
//     model:'model',
//     color:'color'
// };

// var num=12.587;
// var bool=true;
// var array=[
//     {
//         make: 'make',
//         model:'model',
//         color:'color'
//     },
//     {
//         make: 'make',
//         model:'model',
//         color:'color'
//     },
//     {
//         make: 'make',
//         model:'model',
//         color:'color'
//     }
// ];
// function add()
// {
//     window.localStorage.setItem('carinfo',JSON.stringify(array));
//     setTimeout(() => {
//         let data = window.localStorage.getItem('carinfo');
//         console.log(data);
//         console.log(typeof data);
//         console.log(JSON.parse(data));
//     }, 1000);

// }
// add();

let d = new Date;
function dayOfTheMonth(d)
{
    return (d.getDate()<10?'0': '')+d.getDate();
}
console.log(dayOfTheMonth(d));

var currDate =d.getDate();
var currMounth =d.getMonth()+1;
var currYear =d.getFullYear();

console.log(`${currDate}/${currMounth}/${currYear}`);


var currMounth =((d.getMonth()+1)<10?'0':'')+(d.getMonth()+1);
console.log(`${currDate}/${currMounth}/${currYear}`);

var currMounth1 = currMounth.toLocaleString('default',{month:'long'});
console.log(`${currDate}/${currMounth1}/${currYear}`);
