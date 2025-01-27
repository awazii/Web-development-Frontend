// anfn to make anonymous function
new Promise((resolve, reject) => {
let randomnumber=random()
console.log(randomnumber)
setTimeout(() => {
    if (randomnumber>0.5) {
        reject("Sorry this request cannot be accepted");
    }
    else {
        console.log("yes i am done")
        resolve("yayyy")
    }
},
2000)
}).then((value)=>{
    console.log(" i am done",value)
} ).catch((error)=>{
    console.log(error)
})
function random() {
    return Math.random()
}
//"Using throw new Error will log errors when inside a Promise function. However, if you call an async function within the Promise function, you need to use reject to handle and log errors from that async function."
// load script with promises
function loadscript (value,resolved) {
    let div= document.createElement("div")
    div.innerHTML=value
    resolved()
    document.body.append(div)
}
new Promise((resolve) => {
      loadscript("hello this is div",() => {
        resolve()
      }
      )
}).then(()=>{
    alert("div is loaded")
})