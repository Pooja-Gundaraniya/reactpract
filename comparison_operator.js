// equal to operator returs true if both operands values are same by using =
console.log("equal to");
const a = 5, b = 2, c ='HELLO';
console.log(a== 5);// true
console.log(b== '2');//true
console.log(c=='HeLLO');//false
//not equal to operator returns false if both operands values are same by using !=
console.log("not eqaul to");
const d=3,e='hello';//
 console.log(d!=3);//false
 console.log(e!='Hello');//true
 //strict equal to operator returns true if both operands data type and values are same by using ===
console.log("strict equal to");
 const F = 2;
 console.log(F===2);//true
 console.log(F==='2');//false
 //srict not equal to operator returns true if both operands data type and values are same by using !==
console.log("strict not eqaul to");
 const g=3;
 console.log(g!==3);//false
 console.log(g!=='3');//true
//greater than operator returns true is if the left operator is big then right operator by using >
console.log('greter then operator');
const h=3;
console.log(h>4);//false
console.log(h>2);//true
//greater than or equal to operator returns true is if the left operator is big then right operator by using >=
console.log('greter then equal t operator');
const i =3;
console.log(i>=3);//true
console.log(i>=2);//true
console.log(i>3);//false
//less than operator returns true is if the left operator is small then right operator by using<
console.log('less then operator');
const j=3;
console.log(j<4);//true
console.log(j<2);//fasle
//less than or equal to operator returns true is if the left operator is small then right operator byusing <=
console.log('greter then equal to operator');
const k =3;
console.log(k<=3);//true
console.log(k<=2);//fasle
console.log(k<3);//false