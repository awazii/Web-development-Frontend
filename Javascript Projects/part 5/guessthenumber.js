let chance = 0;
let a = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
for (let index = 0; index < 5; index++) {
    const readlineSync = require('readline-sync');
    const input = parseInt(readlineSync.question('Number is between 5 to 15 and you have 10 chances. Enter your guess: '));
    chance += 1;
    if (input > a && input <= 15) {
        console.log(`${input} is not that number`);
        console.log(`Chance: ${chance}`);
        console.log(`Chance Left: ${5-chance}`);
    } else if (input < a && input >= 5) {
        console.log(`${input} is not that number`);
        console.log(`Chance: ${chance}`);
        console.log(`Chance Left: ${5-chance}`);
    } else if (input === a) {
        console.log(`${input} is the same as that number`);
        console.log(`Chance: ${chance}`);
        console.log(`Total Attempts: ${chance}`);
        console.log(`Chance Left: ${5-chance}`);
        break;
    } else if (input > 15 || input < 5) {
        console.log(`Please enter a number between 5 and 15.`);
        console.log(`Chance: ${chance}`);
        console.log(`Chance Left: ${5-chance}`);
    }
}
console.log(`${a} is that number`);
