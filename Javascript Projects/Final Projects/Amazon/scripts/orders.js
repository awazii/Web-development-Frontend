import { checkout_items_update } from "./utils/cartcount.js";
import { order } from "../data/placeorder.js";
import { cart } from "../data/Cart-Class.js";
import { products } from "../data/products.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
console.log(order);
window.onload = function () {
    document.querySelector(".cart-quantity").innerHTML =  checkout_items_update ()
}
function orderdetials(order){
  let html=''
  let matchingproduct={};
order.Products.forEach((product)=>{
  products.forEach((product1)=>{
      if (product1.id===product.productid) {
          matchingproduct=product1
      }
  })
     html+=` <div class="product-image-container">
            <img src="${matchingproduct.image}" class="product-image">
          </div>
          <div class="product-details">
            <div class="product-name">
              ${matchingproduct.name}
            </div>
            <div class="product-delivery-date">
              Arriving on: ${dayjs(product.estimatedDelivery).format(' MMM D, YYYY')}
            </div>
            <div class="product-quantity">
              Quantity: ${product.quantity}
            </div>
          ${product.size?`<div class="product-Size">Size: <span>EUR ( ${product.size} ).</span></div>`:``}
            <button data-product-id="${product.productid}" data-product-size="${product.size}" class="buy-again-button button-primary">
              <img class="buy-again-icon" src="images/icons/buy-again.png">
              <span class="buy-again-message">Buy it again</span>
            </button>
          </div>

          <div class="product-actions">
            <a href="tracking.html?order-id=${order.Orderid}&product-id=${product.productid}">
              <button class="track-package-button button-secondary">
                Track package
              </button>
            </a>
          </div>`
})
return html;
}
function orderhistroy(){
let ordergrid=document.querySelector(".orders-grid")
ordergrid.innerHTML ='';
console.log(order.length)
if (order.length===0) {
  ordergrid.innerHTML=`<div class="orders-empty-container">
          <div class="emptyorderimage">
              <img src="/Javascript Projects/Final Projects/Amazon/images/icons/no-order-3.svg" alt="empty order images">
          </div>
          <div class="emptyordercontent">
              <h3>No Orders <span>Yet!</span></h3>
          </div>
      </div>`
}
else if (order.length!==0) {
  order.forEach((order) => {
    ordergrid.innerHTML+=`<div class="order-container"> 
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${dayjs(order.orderTime).format('dddd, MMM D')}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>USD $${order.totalcost}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${order.Orderid}</div>
            </div>
          </div>

          <div class="order-details-grid">
          ${orderdetials(order)}
          </div>
        </div>`
}
)
document.querySelectorAll(".buy-again-button").forEach((button)=>{
  button.addEventListener('click',()=>{
        cart.buyagain(button);
        document.querySelector(".cart-quantity").innerHTML =  checkout_items_update ()
  })
})
}
}
orderhistroy()
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




