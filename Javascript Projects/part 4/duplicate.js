//using set
let a = [1,7,7,5,5,2,1];
let unique =(unique)=>{
    return Array.from(new Set(unique));
}
console.log(unique(a));
//using a loop and objects
//using duplicate array
a = [1,7,7,5,5,2,1];
let unique1=(unique)=>{
    const a ={};
    const b= [];
    for (let index = 0; index < unique.length; index++) {
        if (!b.includes(unique[index])|| !a[unique[index]]) 
    // this is with duplicate array  and this is with object        
            {
            a[unique[index]]= true;
            console.log(a)
            b.push(unique[index]);
        }
    } 
    return b;
}
console.log(unique1(a));
// using filters
a = [1,7,7,5,5,2,1];
let unique2=
 a.filter((items,index)=>
    a.indexOf(items)==index
    );
console.log(unique2);// so index of (items) means ubdex of its first occurance
// using reduce
a = [1,7,7,5,5,2,1];
let unique3 = a.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
}, []);

console.log(unique3);
/*
Falsy Values in JavaScript
The following values are considered falsy:
                                           false
                                           0
                                           "" (empty string)
                                           null
                                           undefined
                                           NaN (Not-a-Number)

How Logical Operators Work
if (a[unique[index]]):
This checks if a[unique[index]] is truthy.
If a[unique[index]] has a value that is not one of the falsy values listed above, the condition is true.
For example, if a[unique[index]] is true, 1, "hello", or any non-empty object or array, the condition is true.
if (!a[unique[index]]):
This checks if a[unique[index]] is falsy.
The ! operator negates the value. If a[unique[index]] is undefined, null, 0, "", false, or NaN, the condition is true.
For example, if a[unique[index]] is undefined, null, or 0, the condition is true.*/