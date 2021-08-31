document.getElementById('btnget').addEventListener('click', getmethod);
// document.getElementById('btnpost').addEventListener('click', post);
// document.getElementById('btndelete').addEventListener('click', dlt);
const ai = axios.create(
{
    baseURL: 'https://jsonplaceholder.typicode.com'
});
async function get(endpoint,body,header)
{
    const response = await ai(endpoint,body,header)
    console.log(response);
    return response
}
// get('/todos')
async function getmethod()
{

    console.log(await get('/todos'));
}

