// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let file = document.createElement("script")
//         file.src="callbacks.js"
//         document.body.appendChild(file)
//         resolve("File is loaded successfully.")
//     }, 5000);
// }).then(console.log())// this is the shorthand way to console log resolve
// async function fileloader() {
//     await new Promise((resolve, reject) => {
//          setTimeout(() => {
//              let file = document.createElement("script")
//              file.src="callbacks.js"
//              document.body.appendChild(file)
//              resolve()
//          }, 5000);
//      })
//      console.log("File is loaded successfully.")
//  }
//  fileloader()
async function rejector() {
    try {
      let c=await new Promise((resolve, reject) => {
            setTimeout(() => {
            reject("meri marzi")
            }, 3000);
        })
         console.log(c); // if it is rejected if will not execute  because catch will handle errors.
    } catch (error) {
        console.log("Error occurred:", error)
    }
}
rejector()
async function  promises() {
  let all= await Promise.all([
    new Promise(resolve => {
        setTimeout(() => {
            console.log("promise #1 done");   
            resolve("5 sec")
        }, 5000);
    }),
    new Promise(resolve => {
        setTimeout(() => {
            console.log("promise #2 done");
            resolve("3 sec")
        }, 3000);
    }),
     new Promise(resolve => {
        setTimeout(() => {
            console.log("promise #3 done");
            resolve("1 sec")
        }, 1000);
    }),  
    ])
    console.log(all)
}
promises()