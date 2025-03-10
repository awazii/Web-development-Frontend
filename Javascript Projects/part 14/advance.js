 // IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
 function yooo(v) {
    return new Promise((resolve, reject) => {
        if (v) {
            setTimeout(() => {
                resolve('Success message');
            }, 5000);
        } else {
            reject('Error message');
        }
    })
 }
(async () => {   
    let resolved= await yooo(1)
  console.log(resolved);
})()

//Destructuring with arrays
let arr = [1, 2, 3, 4, 5];
let [a, b, c, ...rest] = arr;
console.log(a, b, c, rest);
// it assign form left to right so a=1,b=2,c=3,rest=[4,5]
//  we also give rest of the values using ...variable
let [x, y, z] = arr;
console.log(x, y, z); // we can also skip the rest of the values

//Destructuring with objects
let hobby = 'gaming'
let obj = {
    name: 'Awais',
    age: 21,
    city: 'Lahore',
    hobby// we can also assign the value of variable to key
}
let { name, age, city } = obj;
console.log(name, age, city,obj);
//name of the variable and key of the object should be same

//Spread operator with arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1,4, 5, 6];
console.log(arr2);

//Spread operator with objects
let obj2 ={
    ...obj,
    sex:"Male"
}
console.log(obj2);

// spread operator when we assign array values to object keys
let obj3={...arr}
console.log(obj3) // it will give us array index as a key and value as a value;

//Quick Quiz
const as="the"
const bs="no"
const cs={as,bs}
console.log(cs) // so we get as,bs as a key and the,no as a value

// function ,global & block scope
{
    let a
    a=1 // this will work
}
a=5 // this will not work
{
    var ba
    ba=1 // this will work
}
ba=5 // this will work too
function fun(){
    var c=1
    console.log(c);
}
fun()
console.log(c); // this will not work
// var is function scope that means it can be assigned outside the block
// let and const have block scope that means {} it cannot be assigned outside the block
// varible declared inside a function become local to that function and varible declared outside the function is global scope

//Hoisting
fun1()
function fun1(){
    console.log('I am function');
} // this is called hoisting
af=5
var af // this is also called hoisting
//hoisting is a mechanism where variables and function can be used before declaring them
// var is hoisted but let and const are not hoisted

//closures
function outer(){
    let a=1
    function inner(){
        let b=2
        console.log(a+b);
    }
    return inner
}
let close=outer()
close() // this is called closures
// closures are the combination of function and lexical environment within which that function was declared SO INNER FUNCTION CAN ACCESS THE VARIABLES OF OUTER FUNCTION even after the outer function has finished executing
//closure is a function that makes use of variables defined in outer functions that have previously returned

//lexical environment
function outer1(){
    let a=1
    function inner1(){
        let b=2
        console.log(a+b);
    }
    return inner1
}
let close1=outer1()
close1() // this is called lexical environment
// lexical environment is the environment where the function was declared  so inner function can access the variables of outer function