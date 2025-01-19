const readlineSync = require('readline-sync');
const input = parseInt(readlineSync.question('Please enter a number : '));
let x = input;
let y =x-1;
let v=y;
let z=1;
for (let index1 = 1; index1 <= x; index1++) {
    let line="";
    for (let index = y; index >=1; index--) {
        line += "  ";
    }
    for (let index = 1; index <= index1; index++) {
        line += "* ";
    }
    for (let index = 1; index <= index1-1; index++) {
        line += "* ";
    }
    console.log(line);
    y-=1;
}
for (let index1 = 1; index1 <= x-1; index1++) {
    let line="";
    for (let index = 1; index <=z; index++) {
        line += "  ";
    }
    for (let index = v; index >=1; index--) {
        line += "* ";
    }
    for (let index =v-1; index >=1; index--) {
          line += "* ";
      }
    console.log(line);
    z+=1;
    v-=1;}
    let readlineSync1 = require('readline-sync');
let ina = parseInt(readlineSync1.question('Please enter a number : '));
    if (ina %2==0) {
        console.log(`the number is even`);
    }
    else{
        console.log(`the number is odd`);
    }
    let readlineSync2 = require('readline-sync');
    let inaa= parseInt(readlineSync2.question('Please enter a number : '));
    if (inaa%4==0 &&inaa%100!=0||(inaa%400==0)) {
        console.log(`${inaa} is a leap year`);
    }
    else{
        console.log(`${inaa} is not a leap year`);
    }


