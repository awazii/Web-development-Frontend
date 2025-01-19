let a=[1,2,3,45,12,99];
let b=[1,2,3,4,5,6];
let newa=[];
let newa2=[];
let newa3=[];
let newa4=[];
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    newa.push(element**2) ;
    //use unshift for reverse order because unshift push new element to  the right
    // use push for orignal order beacuse push push new element to the left 
}
newa2=a.map((e,i,b)=>{
          //value,index,array 
    return a[i]*2; // or e*2 same beacuse e is its value
}
)

console.log(newa2);
console.log(newa);
console.log(a.filter(e=>{
    if (e>7) {
        return true;
    }
    return false;
}
)); // or
newa3=a.filter((e=>
     e>7
)

)
newa4=b.reduce(((a,b)=>{
   return a+b
}// reduce do some action in each array then it result becomes a and b is current element of array a starts from 0 and b is current element of array.
)
)
let fr=Array.from("aaaa")
console.log(fr)
console.log(newa4);
console.log(newa3);
