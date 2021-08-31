document.getElementById('btnget').addEventListener('click', getTodos);
document.getElementById('btnpost').addEventListener('click', postTodos);
document.getElementById('btndelete').addEventListener('click', deleteTodos);
const ai = axios.create(
{
    baseURL: 'https://jsonplaceholder.typicode.com'
})
function getTodos() {
    ai(
        {
            method: 'get',
            url: '/todos',
            params:
            {
                _limit: 5
            }
        }).
        then(res => console.log(res))
        .catch(err => console.log(err));

}
function postTodos() {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: 'new todo',
        completed: false
    })
        .then(res => console.log(res))
        .catch(err => console.log(err));
}
function putTodos() {
    axios.put('https://jsonplaceholder.typicode.com/todos/1', {
        title: 'updated todo',
        completed: false
    })
        .then(res => console.log(res))
        .catch(err => console.log(err));
}
function deleteTodos() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => console.log(res))
        .catch(err => console.log(err));
}
axios.interceptors.request.use(config => {
    console.log(`
    ${config.method.toUpperCase()} request send to 
    ${config, 'https://jsonplaceholder.typicode.com/todos/1'} at 
    ${new Date().getTime()}`);
    return config;
},
error =>
{
    return Promise.reject(error)
});

