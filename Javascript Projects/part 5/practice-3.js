let currentdate=new Date();
let hours = currentdate.getHours()
let Name="Awazii"
if (hours>=6&&hours<=12) {
    console.log("Good morning",Name);
}else if (hours>=13&&hours<=17) {
    console.log(`Good afternoon`,Name)
}else if (hours>=18 && hours<=22) {
    console.log(`Time for Bed ${Name} and also Good Night My love`)
}else{
    console.log(`Good night`,Name)
}
const readlineSync = require('readline-sync');
const input =parseInt(readlineSync.question('Enter your age :'));
let holidays;
if ((input<=6||input>=65)&&!holidays) {
    console.log(`Congratulations you got 50% discount`)
}else{
    console.log("you got no discount")
}
let coin=Math.random()
let result;
let Guess=readlineSync.question('Enter your Guess Heads or Tales :')
console.log(Guess)
if (coin<0.5) {
    result="Heads";
}else{
    result="Tales";
}
Guess.toUpperCase()===result.toLocaleUpperCase()?console.log("You win"):console.log(`You lose`);
