// //fetch api by remote api
// document.getElementById("btn").addEventListener("click",makemyrequest);
// // promise then / single data
// function makemyrequest()
// {
//     console.log("button clicked")
//     fetch('https://jsonplaceholder.typicode.com/posts/1').
//     then((res)=>
//     {
//         if(!res.ok)
//         {
//             throw Error(res.statusText);
//         }
//         return res.json()
//     }).
//     then((data)=>
//     {
//         console.log(data)
//     }).
//     catch((error)=>{console.log(error)})
// }
// // promise then / multi data
// document.getElementById("btnmulti").addEventListener("click",makemyreq);
// function makemyreq()
// {
//     fetch('https://jsonplaceholder.typicode.com/posts').
//     then((res1)=>
//     {
//         if(!res1.ok)
//         {
//             throw Error(console.log(res1.statusText))
//         }
//         return res1.json()
//     }).
//     then((data1)=>
//     {
//         console.log(data1)
//         data1.forEach(element => {
//             console.log(element.id)
//         });
//     }).
//     catch((error)=>console.log(error))
// }
document.getElementById("btnmulti").addEventListener("click",makemyreq)
async function makemyreq()
{
    try
    {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!res.ok)
        {
            console.log(res.statusText)
        }
        const dt = await res.json()
        console.log(dt);
        let output = document.getElementById("allpost")
        dt.forEach(element =>
        {
            output.innerHTML +=`
            <div>ID:${element.id}</div>
            <div>Title:${element.title}</div>
            <div>Body:${element.body}</div> <hr>
            `
        });
    }
    catch(error)
    {
        console.log(error) 
    }
}
