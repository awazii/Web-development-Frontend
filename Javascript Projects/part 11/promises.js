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
    document.body.append(div)
    resolved()
}
new Promise((resolve) => {
      loadscript("hello this is div",() => {
        resolve()
      }
      )
}).then(()=>{
    alert("div is loaded")
})
// chaining
new Promise((resolve) => {
    a(() => {
        resolve("input");//first value
    });
}).then((value) => {
    console.log('i am then function', value);//first value will be displayed
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("another value");//new value
        }, 1000);
    });
}).then((newValue) => {
    console.log('i am the second then function', newValue);//second value will be displayed
    return 3 // this return new promise no matter we write promise or not since return return new promise to the then
}).then((value)=>{
    console.log("we are at third then",value)
});
 
function a(fun) {
    setTimeout(()=>{
        fun()
    }, 1000);  
}
 // attaching multiple handlers to the promise 
 let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log('I am not done yet');
      resolve()
    },2000)
 })
 p1.then(()=>{
console.log('I am done.');// we can attach multiple then for same promise at a same time
 })
 p1.then(()=>{
    console.log('Yayyyyy!!!!!!');  
 })
 // promise api's
 // first method
Promise.all([
  new Promise((resolve) => {
    setTimeout(()=>{
        console.log("Success message #1")
        resolve('value 1');
    },1000)
  }),
  new Promise((resolve) => {
    setTimeout(() => {
        console.log("Success message #2")
        resolve('value 2');
    }, 2000);
})
]).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});
// if error catches then promise.all won't run
 // Second method
 Promise.allSettled([
    new Promise((resolve) => {
      setTimeout(()=>{
          console.log("Success message #1")
          resolve('value 1');
      },1000)
    }),
    new Promise((resolve,reject) => {
      setTimeout(() => {
          console.log("Success message #2")
          reject('meri marzi');
      }, 2000);
  })
  ]).then((value) => {
      console.log(value);
  }).catch((error) => {
      console.log(error);
  });
  // it will gave us all the result no matter if it is fullfilled or rejected
// third method
Promise.race([
    new Promise((resolve) => {
      setTimeout(()=>{
          console.log("i am the fasted settled promise")
          resolve('value 1');
      },1000)
    }),
    new Promise((resolve) => {
      setTimeout(() => {
          console.log("Success message #2")
          resolve('value 2');
      }, 2000);
  })
  ]).then((value) => {
      console.log(value);
  }).catch((error) => {
      console.log(error);
  });
// wait for the first promise to settle and its result/error becomes the outcome.
// forth method
Promise.any([
    new Promise((resolve,reject) => {
      setTimeout(()=>{
          console.log("Success message #1")
          reject('value 1');
      },1000)
    }),
    new Promise((resolve) => {
      setTimeout(() => {
          console.log("i am the fastest resolved promise")
          resolve('value 2');
      }, 2000);
  })
  ]).then((value) => {
      console.log(value);
  }).catch((error) => {
      console.log(error);
  });
  // "Wait for the first promise to be fulfilled/resolved, and its result will become the outcome. If all the values are rejected, then an aggregate error will be thrown."
 // Fifth method
let v = 5;
Promise.resolve(v).then((value) => {
  console.log(value);
});
// This creates a resolved promise with the given value.
// We can simulate a scenario where the promise is resolved with this.
// Sixth method
let error = "This will show the error.";
Promise.reject(error).catch((error) => {
  console.log(error);
});
// This creates a rejected promise with the given error.
// We can simulate a scenario where the promise is rejected with this.

  