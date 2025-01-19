import { checkout_items_update } from "./utils/cartcount.js";
import { order } from "../data/placeorder.js";
import { products } from "../data/products.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
window.onload = function () {
    document.querySelector(".cart-quantity").innerHTML =  checkout_items_update ()
}
let duplicateorder,duplicateproduct,duplicateproduct1;
let url = new URL(window.location.href);
let orderid = url.searchParams.get("order-id");
let productid = url.searchParams.get("product-id");
order.forEach((order)=>{
    if (order.Orderid===orderid) {
       duplicateorder=order
    }
}
)
duplicateorder.Products.forEach((product)=>{
    if (product.productid===productid) {
        duplicateproduct=product
    }
})
products.forEach((product)=>{  
    if (product.id===duplicateproduct.productid) {
        duplicateproduct1=product  
    }
 })
document.querySelector(".order-tracking").innerHTML=`<a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>
        <div class="delivery-date">
          Arriving on ${dayjs(duplicateproduct.estimatedDelivery).format(' MMM D, YYYY')}
        </div>
        <div class="product-info name">
         ${duplicateproduct1.name}
        </div>
        <div class="product-info quantity">
        Quantity: <span>${duplicateproduct.quantity}</span>
        </div>
        ${duplicateproduct.size?`<div class="product-info product-Size"> Size: <span>EUR ( ${duplicateproduct.size} ).</span></div>`:``}
        <img class="product-image" src="${duplicateproduct1.image}">
        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>`
        function trackingbar(){
            let today=dayjs();
            let deliverydate=dayjs(duplicateproduct.estimatedDelivery);
            let orderdate=dayjs(duplicateorder.orderTime);
            let eclapsedtime=today.diff(orderdate,'hours');
            let totaltime=deliverydate.diff(orderdate,'hours');
            console.log(eclapsedtime,totaltime)
            let currentstatus=(eclapsedtime/totaltime)*100;
            currentstatus = Math.min(currentstatus, 100);
            console.log(currentstatus)
            document.querySelector(".progress-bar").style.width=`${currentstatus}%`
           document.querySelectorAll(".progress-label").forEach((label)=>{
             label.classList.remove("current-status")
           })
           setTimeout(() => {
            if (currentstatus>=0 && currentstatus<50) {
            document.querySelectorAll(".progress-label")[0].classList.add("current-status")
            
           }
           else if (currentstatus>=50 && currentstatus<100) {
            document.querySelectorAll(".progress-label")[1].classList.add("current-status")
           }
           else if (currentstatus===100) {
            document.querySelectorAll(".progress-label")[2].classList.add("current-status")
           }
          },1000)
           
        }
        trackingbar()
        console.log(order)
        document.querySelector(".search-bar").addEventListener("input",(e)=>{
          document.querySelector(".search-button").innerHTML=` <a href="amazon.html?search=${e.target.value}">
                    <img class="search-icon" src="images/icons/search-icon.png">
                  </a>`
        })
        document.querySelector(".search-bar").addEventListener("keydown",(e)=>{
        if (e.key==="Enter") {
          if (e.target.value) {
            window.location.href=`amazon.html?search=${e.target.value}`
          } 
        }
        })
        
