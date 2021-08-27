document.getElementById("btn").addEventListener("click",makerequest);

function makerequest()
{
    console.log("button clicked")
    fetch('data.json').
    then((res)=>{
        if(!res.ok)
        {
            throw Error(res.statusText)
        }
        console.log(res);
        const dt = res.json()
        console.log(dt)
        return dt
    }).
    then((data)=>{
        console.log(data)
        console.log(data.name)
        console.log(data.sex)
    }).
    catch((error)=> {
        console.log(error)
    })
}