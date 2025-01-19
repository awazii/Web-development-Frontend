let a={}
let b={
    key:"b"
}
let c={
    key:"c"
}
//when you use object as a key in other object javascript convert it to an [object object] string
a[b]=123;
a[c]=456;
console.log(a[b])
console.log(a)
let d ={name:"awais"}
let f ="nam"// this will add new key to that object if name of that key is same as variable 
d[f]="fahad" // and this is its value ||                            then its value will override
console.log(d)