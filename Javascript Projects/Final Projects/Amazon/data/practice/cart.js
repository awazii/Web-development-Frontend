//localStorage.removeItem("cart")
export let cart;
export function loadingcart(){
  cart =JSON.parse(localStorage.getItem("cart"))||[];
}
loadingcart()
export let savecart=()=>{
  localStorage.setItem("cart",JSON.stringify(cart))
}
export let addtocart=(e,button)=>{
  let main = e.target.closest(".product-container");
  let id = button.dataset.productId; // Identify which button is clicked
  let quantity = Number(main.querySelector(".product-quantity-container").firstElementChild.value);
  let duplicate;
  cart.forEach((cartitems) => {
    if (id === cartitems.id) {
      duplicate = cartitems;
    } 
  });
  if (duplicate) {
    duplicate.quantity += quantity;
  } else {
   cart.push({
      id,
      quantity,
      deliveryid:"1"
    });
  }
 savecart();
}
export let delete_cart=(product_id)=>{ 
  let updated=cart.filter((id=> id.id!==product_id))
  cart= updated
  savecart();
}
 export let updatedeliveryoption=(id,deliveryOptionid)=>{
  let duplicate;
  cart.forEach((cartitems) => {
    if (id === cartitems.id) {
      duplicate = cartitems;
    }
  });
  duplicate.deliveryid=deliveryOptionid
  savecart();
 }