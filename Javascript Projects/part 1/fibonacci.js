const readlineSync = require('readline-sync');

// Prompt the user to enter a number
const input = readlineSync.question('Please enter a number: ');

// Convert the input to a number
const number = parseInt(input);
let fib = -1;
let fib2 = 1;
let fib3;
for (let index5 = 1; index5 <= input; index5++) {
    fib3 = fib + fib2;
    console.log(fib3);
    fib = fib2;
    fib2 = fib3;
}
// Print the number
console.log(`here is the fibonacchi series of ${number}`);