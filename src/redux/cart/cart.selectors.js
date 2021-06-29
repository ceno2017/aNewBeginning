import { createSelector } from "reselect";

//This is a normal input selector
 const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart=>cart.cartItems
);

//This is a memoized selector
export const selectCartItemCount = createSelector(
   [selectCartItems], 
   cartItems=>cartItems.reduce((accumulatedQty, cartItem)=>accumulatedQty+ cartItem.quantity,0)
);
