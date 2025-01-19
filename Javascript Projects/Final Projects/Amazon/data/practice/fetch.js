import { cart } from "../Cart-Class"

let backendFetch = () => {
   let fetchvaraible =fetch('https://supersimplebackend.dev/products').then((response) => {
    return response.json()
    }
    )
    .then((data) => {
    console.log(data)
    }).then(() => {
        console.log("After fetch")
    }).catch((error) => {
        console.log(' unexpected error. Try again later',error)
    }
    )
    return fetchvaraible
}
// Call backendFetch and chain another .then to it.
backendFetch().then(() => {
    // This .then is executed after all the .then methods inside backendFetch
    console.log("After CALLING fetch")
})
// use fetch for other types of requests like POST, PUT, DELETE
fetch('https://supersimplebackend.dev/orders',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
       cart
    })
}).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(' unexpected error. Try again later',error)
})