document.getElementById("btn").addEventListener("click",makerequest);

// function makerequest()
// {
//     console.log("button clicked")
//     const promiseobj = fetch('data.txt')
//     console.log(promiseobj);

//     promiseobj.then((res)=>{
//         if(!res.ok)
//         {
//             throw Error(res.statusText)
//         }
//         console.log(res);
//         return res.text()
//     }).
//     then((data)=>{
//         console.log(data)
//     }).
//     catch((error)=> {
//         console.log(error)
//     })
// }

//showing data in webpage
// function makerequest()
// {
//     console.log("button clicked")
//     const promiseobj = fetch('data.txt')
//     console.log(promiseobj);

//     promiseobj.then((res)=>{
//         if(!res.ok)
//         {
//             throw Error(res.statusText)
//         }
//         console.log(res);
//         return res.text()
//     }).
//     then((data)=>{
//         document.getElementById("divdata").innerText= data;
//     }).
//     catch((error)=> {
//         console.log(error)
//     })
// }
// async and await
// async function makerequest()
// {
//     try
//     {
//         console.log("button clicked")
//         const res = await fetch('data.txt')
//         if(!res.ok)
//         {
//             throw Error(res.statusText)
//         }
//         console.log(res)
//         const data = await res.text()
//         console.log(data)
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
// }
// showing data in browser
async function makerequest()
{
    try
    {
        console.log("button clicked")
        const res = await fetch('data.txt')
        if(!res.ok)
        {
            throw Error(res.statusText)
        }
        console.log(res)
        const data = await res.text()
        document.getElementById("divdata").innerText=data;
    }
    catch(error)
    {
        console.log(error)
    }
}