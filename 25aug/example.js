let p = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});
p.then((result) =>{
    console.log(result);
    return result*2;})
    .then((result)=>{
        console.log(result);
        return result*3;});


  console.log("start");
  setTimeout(() => {
      console.log("inside function");
  }, 2000);
  console.log("end");

  function getnumber(){
      return new Promise((resolve))
  }