console.log("GENERATORS");
function *gen()
{
    console.log("first message");
    yield 'yeild no.1';
    console.log("second message");
    yield 'yeild no.2';
}
let g = gen();
console.log(g.next());
console.log(g.next());