const readlineSync = require('readline-sync');
const input =readlineSync.question('enter something : ');
if (Array.isArray(input.split(" "))) {
    console.log("it is an array",input.split(" "))
} else{
    console.log("its is not an array")
}
let b = input.split(" ")
console.log(b.map(e=>{
    return e
}))
let c = b.shift(0)
console.log([c])
let d =[1,2,4,5,5]
for (const element of d) {
    console.log(`this is for of ${element}`)
}
for (const key in d) {
    if (Object.prototype.hasOwnProperty.call(d, key)) {
        const element = d[key];
        console.log(`this is for in ${element}`)
    }
}
for (let index = 0; index < d.length; index++) {
    const element = d[index];
    console.log(element)
 }
console.log(d.join(" "))
console.log(d.map(e=>e*2))
console.log(d.reduce((e,i)=>{
 return e+i
}))
let sum=d.filter(e=> e%2==0)
let double= sum.map(e=>e*2)
console.log(`this is combined answer ${double.reduce((e,i)=>e+i)}`)
for (const element of sum) {
    console.log(element*2);
}