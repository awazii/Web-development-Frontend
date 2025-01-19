import { backend } from "./backend-practice.js";  
new Promise((resolve) => {
    a(() => {
        resolve("input");
    })
}).then((value) =>
    {console.log('i am then function',value)
     });
function a(fun) {
   setTimeout(b,1000,fun);  
}
function b(fun) {
    console.log('i am callback function ')
    fun();
}
Promise.all([new Promise((resolve) => {
    a(() => {
        resolve("input");
    })
}), new Promise((resolve) => {
    backend(() => {
        resolve();
    })
})]).then((value) => { console.log('i am then function this is my value:',value) });