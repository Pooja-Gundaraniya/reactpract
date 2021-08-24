const user ={
    name1: "pooja",
    age: 27, 
    occupation : 'web developer'
};
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
for (const val of Object.keys(user)) {
    console.log(`${val} => ${user[val]}`);
} 
for (const key in user){
    console.log(`${key}:${user[key]}`);
}
