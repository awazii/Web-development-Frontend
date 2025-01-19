const readlineSync = require('readline-sync');
const input = parseInt(readlineSync.question('Enter your age: '));
if (input<18&&input>0) {
    console.log(" you can't drive")
}
else if (input>=18) {
    console.log("you can drive")
}
else{
    console.log("Invaild age")
}
let game=["rock","Paper","scissor"]
let a= Math.floor(Math.random()*game.length)
let b= Math.floor(Math.random()*game.length)
let c= Math.floor(Math.random()*game.length)
console.log(game[a],game[b],game[c])
let age =18;
age<18&& console.log(`you can drive`)//it is the shortcut of simple if statement called guard operator it basically says if first condition is true run the code if it is not true stop the code
age>=18?console.log(`you can driveee`):console.log(`you cannot drive`)// it is the shortcut of if else statement called ternory operator 
let ab;
let store=ab||"bannana"//default operator uses give any default value of something it is optional though. it basically says if first condition is true stop the code or if it is not true use default value.
console.log(store)