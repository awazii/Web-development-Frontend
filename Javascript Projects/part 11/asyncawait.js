async function liked() {
  let d=await delay() 
//   d.then((value) => {
//       console.log(value);
//   })// this will now not work because await returns value not promise
console.log(d);// this works since it returns value

    console.log("after settimeout i will run")
    await getdata()
    console.log("data is fetched")
}
function delay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('i will run after 5 sec');
            resolve(99)
          },5000)
    })  
}
liked()
async function getdata(){
    try {
        let fetchdata= await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let response= await fetchdata.json()// this returns a promise thats why await is working
          console.log(response,fetchdata)
    } catch (error) {
        console.log('Error:',error);    
    }  
}
