// You can use the uuid library to generate random order IDs. Here's how you can use it:
// Install the uuid library using npm:
export function backend (fun){
   const xhr = new XMLHttpRequest();
   xhr.addEventListener('load', () => {
       console.log(xhr.response)
       fun()
   })
   xhr.addEventListener('error', (error) => {
         console.log(' unexpected error. Try again later',error)
   }
   )
   xhr.open('GET', 'https://supersimplebackend.dev');
   xhr.send();
}
// xhr.open('POST', 'https://supersimplebackend.dev/orders');
// xhr.setRequestHeader('Content-Type', 'application/json')
// xhr.send(JSON.stringify(order));

