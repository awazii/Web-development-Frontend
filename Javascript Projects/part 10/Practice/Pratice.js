let add=()=>{
   console.log(2+3)
}
add()
let runtwice=(fun)=>{
    fun()
}
runtwice(add)
let clicked=()=>{
  document.getElementsByTagName("button")[0].innerHTML="Finished !"
}
let flag,ab,ac
let L=()=>{
      document.getElementsByTagName("button")[0].innerHTML="Loading...."
   a= setTimeout(clicked,1000)
}
let remove=()=>{
document.getElementsByTagName("p")[0].innerHTML=""
}
let P=()=>{
    if (!flag) {
        let a= document.getElementsByTagName("p")[0]
        a.innerHTML=("Added")
      ac= setTimeout(remove,2000)
        flag=1
    }
    else if (flag) {
     clearTimeout(ac)
      ac= setTimeout(remove,2000)
     console.log("Second Time")
     flag=null
   }

}
let af=0
let f
let newmsg=()=>{
    if (!f&&af) { 
         document.title=`(${af}) New messages`
         f=1
    }
    else if(f){
        document.title=`App`
        f=null
    }
}
let Added=()=>{
af++
}
let Remove=()=>{
    if (af>0) {
       af--
    }
}
document.title=`App`
setInterval(newmsg,1000)

let arr=[1,55,-3,-7,5,47,777]
let adder=0
arr.forEach(e=>{
    if (e>=0) {
        adder++
    }
})
console.log(`Position count is ${adder}`)
console.log(arr.map(e=>e+2
))
let foods =["Apple","banana",'eggs',"eggs","eggs","Milk","Apple","Graphes","eggs","eggs"]
let eggs=0
console.log(foods.filter(e=>{
    if (e==="eggs"){
        eggs++
        if (eggs>2) {
            return true;
        }
        console.log(eggs)
    }
    else if(e!=="eggs"){
       return true;
    }
}
))
