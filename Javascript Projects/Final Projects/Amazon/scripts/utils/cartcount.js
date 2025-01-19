import { cart } from "../../data/Cart-Class.js";
export const checkout_items_update = () => {
    let count = 0;
    cart.cartItems.forEach(cartitems => {
        count += cartitems.quantity;
    });
    return count;
};