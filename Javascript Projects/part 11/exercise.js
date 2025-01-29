import Typed from 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12/+esm';
async function  main() {
    let text=["Initialized Hacking","Reading your files","password files Detected","Sending all passwords and personal files to server","Cleaning up"]
for (const element of text) {
    await Hacking(element)// we cannot use foreach for await
}
 function typing (element){
    return new Typed(element,{
        strings: ["..."],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true,
        startDelay: 1000,
        backDelay: 1000
      });
}
async function Hacking(text) {
    let randomtimeout=Math.floor(Math.random() * (10 - 1+1) + 1);
    let element =document.createElement("p")
    element.innerHTML=`${text}<span></span>`
    document.body.querySelector(".main").append(element)
let dot=typing(element.firstElementChild)
    await new Promise((resolve) => {
        setTimeout(() => {
            dot.destroy()
             element.firstElementChild.innerHTML="..."
            resolve()
        }, randomtimeout*1000);
     })
}
}
  main()
  // Math.random() * (max - min+1) + min;
  let arr=[1,2,3,4,5,6]
//   let arr1=arr.splice(2,3,"apple","mango")
  let arr2=arr.slice(2,5)
//  console.log("spliced arr1 is:",arr1)
  console.log("sliced arr2 is:",arr2)
console.log(" arr is:",arr)