// for normal request
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
    console.log(xhr.response)
    fun()
})
xhr.addEventListener('error', (error) => {
      console.log(' unexpected error. Try again later',error)
}
)
xhr.open('GET', 'https://error.supersimplebackend.dev');
xhr.send();
  //for promises/fetch
fetch('https://errors.supersimplebackend.dev/products').then((response) => {
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
    //for async await
    async function error(){
        try{
            let response = await fetch('https://errors.supersimplebackend.dev/products')
            let data = await response.json()
            console.log(data)
        }catch(error){
            console.log(' unexpected error. Try again later',error)
        }
    }
    error()
    /* 
    we can manually throw an error using throw new Error('error message')
    and its value will be used the parameter of the catch block
    we can also use reject in the promise to throw an error
   */
