let student={
    Name:"Awazii",
    Number:"0342419742",
    Marks:"300"
}
console.log(student);
let ya = "hello";
ya=y+1
console.log(y);
console.log(typeof y);
const aa =5;
// aa=6; it can't be changed.
const student1={
    Name:"Awazii",
    Number:"0342419742",
    Marks:"3000",
    "hello bro":500
}
// studentMarks["hello bro"] = 500;
student1.haell=500;
console.log(student1);
let key1 = "first Name";
student1[key1] = "John";
let word={
    Simple:"Easily understood or done; not complicated.",
    Happy:" Feeling or showing pleasure or contentment.",
    Run:"Move at a speed faster than a walk.",
    Book:"A set of written or printed pages, usually bound with a cover.",
    Eat:"Put food into the mouth, chew, and swallow it."
}
console.log(word);
let logic = 11;
if (logic<=20 && logic>=10) {
    console.log(" you are eligible");
}
else{
    console.log(" you are not eligible");
}
switch (logic) {
    case 11:
        console.log(" you are eligible"); 
        break;
        case 10:
            console.log(" you are not eligible"); 
    default:
        break;
}
let h=10;
let aaa=15;
h=30;
console.log("Enter two numbers to find prime number between them")
let ab = parseInt(prompt("Enter first number"));
let abc = parseInt(prompt("Enter second number"));
let index;
let hs;
for ( hs = ab; hs <= abc; hs++) {
    let index1=0;
    for ( index =hs; index >=1; index--) {
        if (hs%index==0) {
     index1++;
        }
     }
     if (hs==1||index1==2) {
   console.log(`${number}is a prime number`);
    }
    else{
        console.log(hs,"is not  a prime number"); }
     }

if (h%2==0) {
    console.log("number is divisible by 2 ");
}
if (aaa%3==0) {
    console.log("number is divisible by 3 ");
}
h>=18 ? console.log('you can drive'):console.log('you cannot drive');


