fetch('example.json')
.then((apidata)=>{
    // console.log(apidata);
    return apidata.json();
}).then((actualdata)=>{
    console.log(actualdata.dataseries[2]);
}).catch((error)=>{
    console.log(`The error: ${error}`);
})