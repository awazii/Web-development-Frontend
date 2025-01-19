//localStorage.removeItem("orders")
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { v4 as uuidv4 } from 'https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/esm-browser/index.js';
import { cart } from './Cart-Class.js';
import { deliveryOptions } from './deliveryoption.js';   
export let order;
function loadingorders (){
    order =JSON.parse(localStorage.getItem('orders')) || [];
}
export function orderplaced (cost){
console.log("Order placed cost is ",cost)
let Products = [];
let delivery={};
let orderTime=dayjs().format();
let deliverydate=dayjs(orderTime)
cart.cartItems.forEach((cartitem) => { 
   deliveryOptions.forEach((deliveryOption)=>
    {
    if (deliveryOption.id===cartitem.deliveryid) {
        delivery=deliveryOption
    }
    })
   Products.push(
    {
     productid:cartitem.id,
     quantity:cartitem.quantity,
     estimatedDelivery:deliverydate.add(delivery.deliverydays,'day').format(),
     size:cartitem.size
   }
)
})
order.unshift({
    Orderid:uuidv4(),
    orderTime,
    totalcost:Number(cost),
    Products
})
localStorage.setItem('orders', JSON.stringify(order))
console.log(order)
}
loadingorders()
