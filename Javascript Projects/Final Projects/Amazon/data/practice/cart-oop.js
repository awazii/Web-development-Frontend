//localStorage.removeItem("cart")
function Cart(Key){
    const cart={
        cartItems:undefined,
        loadingcart(){
            this.cartItems =JSON.parse(localStorage.getItem(Key))||[];
        },
        savecart(){
            localStorage.setItem(Key,JSON.stringify(this.cartItems))
        },
        addtocart(e,button){
            let main = e.target.closest(".product-container");
            let id = button.dataset.productId; // Identify which button is clicked
            let quantity = Number(main.querySelector(".product-quantity-container").firstElementChild.value);
            let duplicate;
            this.cartItems.forEach((cartitems) => {
              if (id === cartitems.id) {
                duplicate = cartitems;
              } 
            });
            if (duplicate) {
              duplicate.quantity += quantity;
            } else {
             this.cartItems.push({
                id,
                quantity,
                deliveryid:"1"
              });
            }
           this.savecart();
          },
          delete_cart(product_id){ 
            let updated=this.cartItems.filter((id=> id.id!==product_id))
            this.cartItems= updated
            this.savecart();
          },
           updatedeliveryoption(id,deliveryOptionid){
            let duplicate;
            this.cartItems.forEach((cartitems) => {
              if (id === cartitems.id) {
                duplicate = cartitems;
              }
            });
            duplicate.deliveryid=deliveryOptionid
           this.savecart();
           }
    }
    return cart
}
let cart=Cart('cart-oop')
let cart_Business=Cart('cart-business-oop')
cart.loadingcart();
console.log(cart)
console.log(cart_Business)