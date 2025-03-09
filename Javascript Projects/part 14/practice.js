(async (n) => {
    let h= await new Promise((resolve,reject)=>{
        setTimeout(() => {
             resolve('Hello')
        }, n);
    })
    console.log(h);
    let w= await new Promise((resolve,reject)=>{
        setTimeout(() => {
             resolve('World')
        }, n);
    })
    console.log(w);

})(5000);
function average(...number) {
    console.log(...number)// with dots we get individual values and without we get array
    let sum =0
  sum= number.reduce((a,b)=>a+b,0)
  console.log(sum/numbers.length)
}
let numbers = [9,2,6,4,8,1];
average(...numbers)
function interest (p,r,t){
     
    return p*(r/100)*t
}
console.log(interest(1000,5,2))