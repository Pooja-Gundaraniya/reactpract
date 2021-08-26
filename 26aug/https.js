import axios from 'axios';
const { config } = require("node:process");

document.getElementById("btn").addEventListener("click",makerequest);

// function makerequest()
// {
//     console.log("button clicked")
//     axios.get('data.txt')
//   .then(function (res) {
//     console.log(res.data)
//     document.getElementById("divdata").innerText=res.data
//   }).catch((error) => console.log(error))
//   .then(()=>{console.log("clean")})
// }
//async await
async function makerequest()
{
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    console.log("button clicked")
    const response = await axios.get(`${BASE_URL}/todos?_limit=5`);
//     config ={
//         method:'get',
//         url:'data.txt'
//     }
//    const res = await axios(config)
//    console.log(res)
//    console.log(res.data)
}

