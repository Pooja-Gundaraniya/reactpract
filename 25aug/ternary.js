const netflix=['mimi','bone & shadow','peaky blinders','vikings'];
const amazonPrime=['wampire diaries','shershah','mirzapur','familyman','familyman2'];

const choice= amazonPrime;

choice===netflix?netflix :amazonPrime
{
    choice.forEach((element)=>console.log(element));
}