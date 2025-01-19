import { cart } from '../../data/Cart-Class.js';
import { products } from '../../data/products.js';
import { formatcurrency } from '../utils/money.js';
import { deliveryOptions } from '../../data/deliveryoption.js';
import { orderplaced } from '../../data/placeorder.js';
import { changecart, updateordersummmary } from './order-summary.js';
export function renderpaymentsummary() {
  let totalcosts;
    let html = document.querySelector(".js-payment-summary")
    let count = checkout_items_update()
    let [total, Shipping, beforetax, tax,final_price] = total_price()
    html.innerHTML = `<div class="payment-summary-title">
            Order Summary
          </div>
          <div class="payment-summary-row">
            <div>Items (${count}):</div>
            <div class="payment-summary-money">$${total}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${Shipping}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${beforetax}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (1%):</div>
            <div class="payment-summary-money">$${tax}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${final_price}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>`
    function checkout_items_update() {
        let count = 0;
        cart.cartItems.forEach(cartitems => {
            count += cartitems.quantity;
        });
        return count;
    };
        function total_price() {
        let count = 0;
        let Shipping = 0;
        let beforetax = 0;
        let tax = 0;
        let final_price = 0
        cart.cartItems.forEach(cartitems => {
            let price, shipprice, final;
            let matchingproduct = products.filter(product => product.id === cartitems.id);
            let matchingdelivery = deliveryOptions.filter(product => product.id === cartitems.deliveryid)
            shipprice = Number(formatcurrency(matchingdelivery[0].priceCents))
            price = Number(formatcurrency(matchingproduct[0].priceCents) * cartitems.quantity)
            count += price
            Shipping += shipprice
            final = price + shipprice
            beforetax += final
        });
        let cal = beforetax * 100
        tax = Number(formatcurrency(cal * 0.01))
        final_price = Number(beforetax+tax)
        return [count.toFixed(2), Shipping.toFixed(2), beforetax.toFixed(2), tax.toFixed(2), final_price.toFixed(2)];
    }
  totalcosts=final_price;
  document.querySelector(".place-order-button").addEventListener("click",()=>{
    if (cart.cartItems.length !== 0) {
      orderplaced(totalcosts)
      cart.cartItems = [];
      cart.savecart();
      changecart()
      updateordersummmary();
      renderpaymentsummary();
      console.log("order placed")
    }
    else{
    console.log("cart is empty")
  }
  })
}