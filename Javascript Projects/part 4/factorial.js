const readlineSync = require('readline-sync');
const input = parseInt(readlineSync.question('Please enter a number : '));
let b= 1;
if (input==0) {
    console.log(`Factorial of 0 is ${input+1}`)
}
else if (input<0){
    console.log(`Factorial of ${input} is undefined`)
}
else{
    for (let index =b; index <=input; index++) {
        b*=index; 
    }
    console.log(`Factorial of ${input} is ${b}`)
}
 let c = input
 if (c==0) {
    console.log(`Factorial of 0 is ${c+1}`)
}
else if (c<0){
    console.log(`Factorial of ${c} is undefined`)
}
else{
    function factorial(number){
        let arr = Array.from(Array(number+1).keys())
      let d = arr.slice(1).reduce((c, b)=> {
      return c*b
        } )
       return d
    }
    console.log(`Factorial of ${c} is ${factorial(c)}`)
}
