const series=["money heist",'dark','game of thrones'];

series.push('vikings');
console.log(series);

const s2 =series.slice(-1);
console.log(s2);

const s3 =series[series.length-1];
console.log(s3)

const s4 =series.pop();
console.log(s4)

series.pop();
console.log(series);