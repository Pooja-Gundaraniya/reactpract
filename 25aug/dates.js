var d = new Date();
d.setMonth(11);
d.setFullYear(2021,11,3);
d.setDate(20);
console.log(d);



var dateObj = new Date();
var month =dateObj.getUTCMonth()+1;
var day =dateObj.getUTCDate();
var year =dateObj.getFullYear();
console.log(`${year}/${month}/${day}`);

const startingMinutes =10;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');

setInterval(updatecountdown, 1000);

function updatecountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

countdownEl.innerHTML = `${minutes}:${seconds}`;
time--;
}


