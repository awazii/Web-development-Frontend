let b =[4,5,6,7,2,1]
let c ={
    a:2,
    b:4,
    c:5
}
for (let index = 0; index < b.length; index++) {
    const element = b[index];
    console.log(element);
}
b.forEach((i,c,a) => 
  //value,index,array 
    {
    console.log(i,c,a);
});

for (const key in b) {
    if (Object.prototype.hasOwnProperty.call(b, key)) {
        const element = b[key];
        console.log(key,element)
                    // key means index in this and element means elements of array
    }
}// it can be work with array but it is recommended to use for of and for each

for (const key in c) {
    if (Object.prototype.hasOwnProperty.call(c, key)) {
        const element = c[key];
        console.log(key,element)
        //          key means a: value means :2
        /*          let c ={
                            a:2,
                            b:4,
                            c:5
                                    in this     */
}
    }
for (const element of b) {
     console.log(element)//b[element]will not show index beacuse it only give array elements so it will be the value of array not index for example
    //  b =[4,5,6,7,2,1] b[element] will be
    //     b[4],b[5],b[6],b[7],b[2],b[1] because it looped through its value not its index.

}
let marks=[85,97,44,37,76,60]
let sum=0;
for (const element of marks) {
    sum+=element;
}
console.log(sum/marks.length)
