const studentMarks = {
    name: "John Doe",
    math: 85,
    science: 90,
    english: 78,
    history: 88
};
const length = Object.keys(studentMarks).length;
     console.log(`Marks for ${studentMarks.name}:`);
for (const key in studentMarks) {
    if (key!="name") {
       console.log(`${key}:${studentMarks[key]}`)
    }
}
for (let index =1 ; index==1;) {
  const readlineSync = require('readline-sync');

// Prompt the user to enter a number
const input = readlineSync.question('Please enter a number 5: ');
  if (input==5) {
    break;
  }
  else{
    console.log("try again!!");
  }
}
console.log("I am a tutorial on Loops")

let a = 1;
 console.log(a)
console.log(a+1)
 console.log(a+2)

for (let i = 0; i < 100; i++) { 
     console.log(a + i); 
}

 let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
 
 for (const key in obj) {  
         console.log(key)
 }

for (const c of "Harry") {
    console.log(c)
}

// let ii = 0;
// while (ii<60000) {
//     console.log(ii)
//     ii++;
// }

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);
for (let index = 0; index <100; index++) {
   console.log(index);
}
for (const key in studentMarks) {
console.log(key);
}
let aa = "awais";
for (const element of aa) {
    console.log(element);
}
let ia=1;
while (ia<10) {
    console.log(aa);
    ia++;
}
