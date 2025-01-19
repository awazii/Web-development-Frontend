let arr2 = ["apple", "apple", "apple", "graphes","graphes", "mango", "mango", "mango", "mango", "mango", "mango", "mango", "mango", "mango", "mango", "mango", "mango", "mango"];

let countWords = (e) => {
    let wordCount = {};
    for (let i = 0; i < e.length; i++) {
        let word = e[i];
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    return wordCount;
};

console.log("The counted fruits are", countWords(arr2));
// console.log(arr1.lastIndexOf("apple"))
//  let minmax =(e)=>{
// //   let a= e.filter(e=>{
// //     if(e>0){
// //         return e
// //     }
// //   })
// //     return a
// let max=e[0]
// let min =e[0]
// let object={}
// for (let index = 0; index < e.length; index++) {

//     if (e[index]>max) {
//        max=e[index]
//     }
//     if (e[index]<min) {
//         min=e[index]
//     }
// }
// if (!min&&!max) {
// max=null
//     min=null
// }
// object.minimum=min
// object.maximum =max
// return object
//  }

//  console.log("The minimum and maximum values of arr is:",minmax(arr1))
let foods =["Apple","banana",'eggs',"eggs","eggs","Milk","Apple","Graphes","eggs","eggs"]
let removeegg=(array)=>{
    let arr=[]
    let eggs=0
    array.forEach(element => {
        if (element==="eggs"){
            eggs++
            if (eggs>2) {
                arr.unshift(element)  
            }
            console.log(eggs)
        }
        else if(element!=="eggs"){
            arr.unshift(element)  
        }
    });  
    return arr 
}
console.log(`Array without  first 2 eggs is :`, removeegg(foods.reverse()))
for (let index = 1; index <=20; index++) {
   if (index%3===0&&index%5===0) {
        console.log("fizzbuzz")
   }
   else if (index%5===0) {
       console.log("buzz")
   }
   else if (index%3===0) {
     console.log("fizz")
   }
   else{
    console.log(index)
   }
    
}
let unique =(unique)=>{
    return Array.from(new Set(unique));
}
console.log(unique(foods))
