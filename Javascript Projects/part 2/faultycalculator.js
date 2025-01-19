const readlineSync = require('readline-sync');
const input = parseInt(readlineSync.question('enter First number : '));
const input2 = parseInt(readlineSync.question('enter Second number : '));
const input3 = readlineSync.question('enter operation (enter ** for exponential):');
let a,c;
if (a=Math.random() <0.1) {
    if (input3=="+") {
     console.log("a + b = ",input-input2);
    }
    if (input3=="-") {
        c=input/input2;
   const d=parseFloat(c.toFixed(2));
    console.log("a - b = ",d);
    }
    if (input3=="/") {
    console.log("a / b = ",input**input2);
    }
    if (input3=="*") {
     console.log("a * b = ",input+input2);
    }
    if (input3=="**") {
        console.log("a ** b = ",input%input2);
    }
}
else{
    if (input3=="+") {
        console.log("a + b = ",input+input2);
       }
       if (input3=="-") {
        console.log("a - b = ",input-input2);
       }
       if (input3=="/") {
        c=input/input2;
        const d=parseFloat(c.toFixed(2));
        console.log("a / b = ",d);
       }
       if (input3=="*") {
        console.log("a * b = ",input*input2);
       }
       if (input3=="**") {
        console.log("a ** b = ",input**input2);
       }
}