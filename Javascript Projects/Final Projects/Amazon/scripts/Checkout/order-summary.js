import { cart} from '../../data/Cart-Class.js';
import { products } from '../../data/products.js';
import { formatcurrency } from '../utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions } from '../../data/deliveryoption.js';
import {renderpaymentsummary} from '../Checkout/Payment-Summary.js'
let Checkout_summary = document.querySelector(".js-order-summary");
let isorderplaced;
export function changecart(){
    isorderplaced=true;
}
export function updateordersummmary(){
    Checkout_summary.innerHTML = '';
    cart.cartItems.forEach((cartitems) => {
        const productId = cartitems.id;
        let matchingproduct = products.filter(product => product.id === productId);
        let deliveryOptionid=cartitems.deliveryid
        let deliveryOption
        deliveryOptions.forEach(option=>{
             if (option.id===deliveryOptionid) {
                deliveryOption=option
             }
        })
        const datestring = todaydate(deliveryOption.deliverydays)
        Checkout_summary.innerHTML += `<div class="cart-item-container">
            <div class="delivery-date">🚚 Delivery Date: ${datestring}</div>
            <div class="cart-item-details-grid">
                <img class="product-image" src="${matchingproduct[0].image}">
                <div class="cart-item-details">
                    <div class="product-name">${matchingproduct[0].name}</div>
                    <div class="product-price">${matchingproduct[0].productprice()} ( Total Price : $${formatcurrency(matchingproduct[0].priceCents*cartitems.quantity)} )</div>
                    ${cartitems.size?`<div class="product-Size">Size: <span>EUR ( ${cartitems.size} ).</span></div>`:``}
                    <div class="product-quantity">
                        <span>Quantity: <span class="quantity-label">${cartitems.quantity}</span></span>
                        <span data-product-id="${productId}" class="update-quantity-link link-primary js-updatebtn">Update</span>
                        <input type="number" class="quantity-input" value="${cartitems.quantity}" style="display:none;">
                        <span data-product-id="${productId}"data-product-size="${cartitems.size}" class="link-primary save-quantity-link js-savebtn" style="display:none;">Save</span>
                        <span data-product-id="${productId}" data-product-size="${cartitems.size}"class="delete-quantity-link link-primary js-deletebtn">Delete</span>
                    </div>
                </div>
                    <div class="delivery-options">
                    <div class="delivery-options-title">Choose a delivery option:</div>
                   ${deliveryoptionhtml(matchingproduct[0].id,cartitems)}
                </div>
            </div>
        </div>`;
    });
    function deliveryoptionhtml(id,cartitems){
        let html =''
        deliveryOptions.forEach((deliveryOption)=>{  
              const datestring = todaydate(deliveryOption.deliverydays)
              const pricestring = deliveryOption.priceCents===0?  'FREE':`$${formatcurrency(deliveryOption.priceCents)} -`
              const ischecked = deliveryOption.id===cartitems.deliveryid;
    
         html+= `<div class="delivery-option js-delivery-option" data-delivery-id=${deliveryOption.id} data-product-id=${id}
         ${cartitems.size ?`data-product-size=${cartitems.size}  `:``}>
                        <input type="radio" class="delivery-option-input" name="delivery-option-${id+cartitems.size}"${ischecked ? 'checked' : ''}>
                        <div><div class="delivery-option-date">${datestring}</div><div class="delivery-option-price">${pricestring} Shipping</div></div>
                    </div>`
        })
        return html
    }
    function todaydate(deliveryOption){
        const today =dayjs();
        let deliverydate =today.add(deliveryOption,'days');
         if (deliverydate.format('dddd')==='Sunday') {
           deliverydate =deliverydate.add(1,'days')
         }
          return deliverydate.format(
           'dddd, MMMM D, YYYY'
         )
    }
    const emptycart = () => {
        if (cart.cartItems.length === 0 && !isorderplaced) {
            Checkout_summary.innerHTML = `<div class="cart-item-container empty-cart">
                <div class="cartimage">
                    <img src="/Javascript Projects/Final Projects/Amazon/images/icons/R.png" alt="empty cart images">
                </div>
                <div class="emptycontent">
                    <h3>Your Cart is <span>Empty!</span></h3>
                    <p>Go to the store to add items to the cart</p>
                </div>
                <button class="buyback">
                    <a href="amazon.html">
                    <img src="/Javascript Projects/Final Projects/Amazon/images/icons/buy-again.png" alt="logo of buyback"> Return To Store</a></button>
            </div>`;
        }
        else if (isorderplaced) {
           Checkout_summary.innerHTML=` <div class="cart-item-container orderplaced">
            <div class="orderplacedimage">
                <img src="images/icons/modern-flat-illustration-of-order-placed-vector-removebg-preview.png" alt="empty cart images">
            </div>
            <div class="orderplacedcontent">
                <h3>Thanks you for  <span>Shopping!</span></h3>
                <p>Your Order has been placed successfully.</p>
            </div>
            <button class="Vieworders">
                <a href="orders.html">
                <img src="/Javascript Projects/Final Projects/Amazon/images/icons/cargo_3045670.png" alt="logo of buyback"> View Orders</a></button>
        </div>`
        }
    };
    emptycart();
    const checkout = document.querySelector(".checkout-items");
     const checkout_items_update = () => {
        let count = 0;
        cart.cartItems.forEach(cartitems => {
            count += cartitems.quantity;
        });
        checkout.innerHTML = (count === 0) ? `No Items!` : `${count} item${count > 1 ? 's' : ''}`;
    };
    
    document.querySelectorAll(".js-deletebtn").forEach(button => {
        button.addEventListener("click", () => {
            let {productId,productSize} = button.dataset;
            cart.delete_cart(productId,productSize);
            emptycart();
            renderpaymentsummary()
            updateordersummmary()
        });
    });
    
    checkout_items_update();
    
    const inputtext = (input) => {
        input.addEventListener("input", () => {
            if (input.value <0) input.value = 1;
            if (input.value.length > 2) input.value = input.value.slice(0, 2);
        });
        input.addEventListener("blur", () => {
            if (input.value == 0) input.value = 1;
        });
    };
    
    const cart_change = (inputquantity, id,size) => {
        let duplicate,duplicate1
        console.log(inputquantity,id,size)
        cart.cartItems.forEach(cartitem => {
            if (cartitem.id === id) {
                duplicate=cartitem;
            }
            if (cartitem.id === id && cartitem.size===size) {
                duplicate1=cartitem;
            }
        });
        console.log(duplicate)
        if (size!=="undefined") {
            duplicate1.quantity=inputquantity;
        }
        else {
            duplicate.quantity=inputquantity;
        }
        cart.savecart();
        checkout_items_update();
    }; 
    const saveQuantity = () => {
        document.querySelectorAll(".js-savebtn").forEach(savebutton => {
            savebutton.addEventListener("click", (e) => {
                let {productId,productSize} = savebutton.dataset;
                let main = e.target.closest(".product-quantity");
                let input = Number(main.querySelector(".quantity-input").value);
                cart_change(input, productId,productSize);
                main.querySelector(".quantity-label").innerHTML = input;
                main.querySelector(".js-updatebtn").style.display = "inline-block";
                savebutton.style.display = "none";
                main.querySelector(".quantity-input").style.display = "none";
                updateordersummmary()
                renderpaymentsummary()
            });
        });
    };
    
    document.querySelectorAll(".js-updatebtn").forEach(button => {
        button.addEventListener("click", (e) => {
            let main = e.target.closest(".product-quantity");
            main.querySelector(".js-savebtn").style.display = "inline-block";
            main.querySelector(".quantity-input").style.display = "inline-block";
            e.target.style.display = "none";
            inputtext(main.querySelector(".quantity-input"));
            saveQuantity();
        });
    });
        document.querySelectorAll(".js-delivery-option").forEach(element=>{
            element.addEventListener("click",()=>{
                let {productId,deliveryId,productSize} = element.dataset
                 cart.updatedeliveryoption(productId,deliveryId,productSize)
                 updateordersummmary()
                 renderpaymentsummary()
            })
          })    
}

