function nice(n) {
    console.log("Hey " + n + " you are nice!")
    console.log("Hey " + n + " you are good!")
    console.log("Hey " + n + " your tshirt is nice!")
    console.log("Hey " + n + " your course is good too!")
}
 nice("awais")
function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}

let result1 = sum(3, 2)
let result2 = sum(7, 5)
let result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)


const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);
const readlineSync = require('readline-sync');

function mean() {
 const input = parseInt(readlineSync.question('Please enter a number : '));
const input2 = parseInt(readlineSync.question('Please enter a number : '));
const input3 =parseInt(readlineSync.question('Please enter a number : '));
const input4 = parseInt(readlineSync.question('Please enter a number : '));
const input5 = parseInt(readlineSync.question('Please enter a number : '));
    const sum1 = input+input2+input3+input4+input5;
    let sum2=sum1/5;
   return sum2;
}
 let rer= mean();
 console.log(`the mean of the 5 is ${rer}`);
