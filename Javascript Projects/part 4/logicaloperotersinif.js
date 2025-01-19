const a = {};
let value = a['key']; // value is undefined

if (!a['key']) {
    console.log('Value is falsy'); // This will be printed
}

value = true;
a['k']=true;
console.log(value)
console.log(a)
if (value) {
    console.log('Value is truthy'); // This will be printed
}
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
if (a['k']):
This checks if a['k'] is truthy.
If a['k']  has a value that is not one of the falsy values listed above, the condition is true.
For example, if a[unique[index]] is true, 1, "hello", or any non-empty object or array, the condition is true.
if (!a['k']):
This checks if a[unique[index]] is falsy.
The ! operator negates the value. If a[unique[index]] is undefined, null, 0, "", false, or NaN, the condition is true.
For example, if a[unique[index]] is undefined, null, or 0, the condition is true.*/
let aa=[1,2,2,5,7,8,12,2,1,1];
let bb=aa.map((element, index)=>{
   if (aa.indexOf(element)==index) {
    return element
   }
   return;
}
)
console.log(bb);
aa=[1,2,2,5,7,8,12,2,1,1];
aa.forEach((element,index) => {
    if (aa.indexOf(element)==index) {
        console.log(element,index)
    }
    return;
});
for (const element of aa) {
    console.log(element,aa.indexOf(element))
}