//localStorage.removeItem("cart-oop")
import { products } from "../data/products.js";
class Cart {
  cartItems;
  #key;
  constructor(key) {
    this.#key = key
    this.#loadingcart();
  }
  #loadingcart() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#key)) || [];
  }
  savecart() {
    localStorage.setItem(this.#key, JSON.stringify(this.cartItems))
  }
  addtocart(e, button) {
    let main = e.target.closest(".product-container");
    let id = button.dataset.productId; // Identify which button is clicked
    let quantity = Number(main.querySelector(".product-quantity-container").firstElementChild.value);
    let duplicate, size, duplicate1, sizeduplicate = {};
    products.forEach(product => {
      if (product.id === id) {
        duplicate1 = product
      }
    })
    if (duplicate1.sizeChartLink || duplicate1.footChartLink) {
      size = main.querySelector(".product-quantity-container").children[1].value
    }
    this.cartItems.forEach((cartitems) => {
      if (id === cartitems.id) {
        duplicate = cartitems;
      }
      if (id === cartitems.id && size === cartitems.size) {
        sizeduplicate = cartitems;
      }
    });
    console.log(sizeduplicate.size, size)
    if (sizeduplicate.size !== size) {
      this.cartItems.push({
        id,
        quantity,
        deliveryid: "1",
        size
      });
      console.log("entered")
    }
    else if (sizeduplicate.size && sizeduplicate.size === size) {
      sizeduplicate.quantity += quantity
      console.log("entered1")
    }
    else if (duplicate) {
      duplicate.quantity += quantity;
      console.log("entered2")
    }
    else {
      this.cartItems.push({
        id,
        quantity,
        deliveryid: "1",
        size
      });
      console.log("entered3")
    }
    this.savecart();
  }
  buyagain(button) {
    let id = button.dataset.productId;
    let size = button.dataset.productSize,quantity=1;
    if (size==="undefined") {
      size=undefined;
    }
    let duplicate,sizeduplicate={};
    this.cartItems.forEach((cartitems) => {
      if (id === cartitems.id) {
        duplicate = cartitems;
      }
      if (id === cartitems.id && size === cartitems.size) {
        sizeduplicate = cartitems;
      }
    });
    console.log(sizeduplicate.size, size)
    if (sizeduplicate.size !== size) {
      this.cartItems.push({
        id,
        quantity,
        deliveryid: "1",
        size
      });
      console.log("entered")
    }
    else if (sizeduplicate.size && sizeduplicate.size === size) {
      sizeduplicate.quantity += quantity
      console.log("entered1")
    }
    else if (duplicate) {
      duplicate.quantity += quantity;
      console.log("entered2")
    }
    else {
      this.cartItems.push({
        id,
        quantity,
        deliveryid: "1",
        size
      });
      console.log("entered3")
    }
    console.log(this.cartItems)
    this.savecart();
  }
  delete_cart(product_id, productSize) {
    let updated = this.cartItems.filter(id => {
      if (productSize === "undefined") {
        if (id.id === product_id) {
          return;
        }
        return true;
      }
      else {
        if (id.id === product_id && id.size === productSize) {
          return;
        }
        return true;
      }
    })
    this.cartItems = updated
    this.savecart();
  }
  updatedeliveryoption(id, deliveryOptionid, size) {
    let duplicate, duplicate1;
    if (!size) {
      this.cartItems.forEach((cartitems) => {
        if (id === cartitems.id) {
          duplicate = cartitems;
        }
      });
      duplicate.deliveryid = deliveryOptionid
    }
    else if (size) {
      this.cartItems.forEach(cartitems => {
        if (size === cartitems.size) {
          duplicate1 = cartitems;
        }
      })
      duplicate1.deliveryid = deliveryOptionid
    }
    this.savecart();
  }
}
export let cart = new Cart('cart-oop');