let arr=[];
let arr1=[];
for (let index = 0; index==0;) {
const readlineSync = require('readline-sync');
const input = parseInt(readlineSync.question('Please enter a number : '));
if (input==0) {
    arr.push(input);
    break;
}
arr.push(input);
arr1.push(input**2);
}
console.log(arr);
console.log(arr1);
console.log(arr.filter(e=>{
    if (e%10==0 && e!=0) {
        return true ;
    } 
    return false;
}
));
let a= [7,9,8,1,1000,54892,185748967,0]
let b = a.splice(2,3,55,75,95)
console.log(a,b)
let compare=(a,b)=>{
    return a-b;
}
console.log(`${a.sort(compare)} this is sort`)
a= [250,645,300,900,50]
console.log(a.map(e=>{
    return ((90/100)*e)
}))
let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
company.shift(0);
company.splice(1,1,"Ola");
company.push("Amazon");
console.log(company)
a= [250,645,300,900,50]
