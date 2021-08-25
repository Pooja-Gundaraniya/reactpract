function noun(value){
    console.log(value);
}
function add(){
    const array = ["pooja","neel","karan"];
    var name = window.prompt("enter name to add in database");
    alert("your name is "+ name);
    array.push(name);
    noun(array);
}
add();
function noun(value){
    console.log(value);
}
function add(callback){
    const array = ["pooja","neel","karan"];
    var name = window.prompt("enter name to add in database");
    alert("your name is "+ name);
    array.push(name);
    callback(array);
}
add(noun)  

const posts = [
    {
        title : "Post 1",
        body : "This is the Post one"
    },
    {
        title : "Post 2",
        body : "This is the Second post"
    },
    {
        title : "Post 3",
        body : "This is the Third post"
    },
    {
        title : "Post 4",
        body : "This is the fourth post"
    }
];

function getPosts(){
    setTimeout(()=>{
        let output = "";
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
            
        });
        document.body.innerHTML = output;

            console.log()    
    },1000);
}


const createPosts = (newpost) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(newpost);
            const error = true;
            if(!error)
            {
                resolve();
            }
            else{
                reject("Error : Something went wrong");
            }
        },2000);
    });
  
}



createPosts({title : "post5withPromise", body : "This is the post number fivee"}).then(getPosts).catch(err => console.log(err));