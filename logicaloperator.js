//logical and returns true if both operands are true
console.log ("logical and operator")
const l = true, m=false,n=30;
console.log(l&&l);//true
console.log(l&&m);//fasle
console.log((n>10)&&(n> 50));//fasle
//logical OR returns false if both operands are true
console.log ("logical OR operator")
const o = true, p=false,q=30;
console.log(o||o);//false
console.log(p||p);//true
console.log((q>10)||(q> 50));//true
//logical not returns true is the operand is false and vice versa
console.log ("logical NOT operator")
const r=true,s=false;
console.log(!r);//fasle
console.log(!s);//true
//ternary operator condition return first vlue if it return second value
console.log("ternary operator");
const age = 10;
let voteable =(age<18) ? "too young" :"old enough";
console.log(voteable);// too young