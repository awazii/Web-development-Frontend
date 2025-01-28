async function liked() {
  await delay() 
    console.log("after settimeout i will run")
    await getdata()
    console.log("data is fetched")
}
function delay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('i will run after 5 sec');
            resolve()
          },5000)
    })  
}
liked()
async function getdata(){
    try {
        let fetchdata= await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let response= await fetchdata.json()
          console.log(response)
    } catch (error) {
        console.log('Error:',error);    
    }  
}
