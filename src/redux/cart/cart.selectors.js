import { createSelector } from "reselect";

//This is a normal input selector
 const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);
//This is a memoized selector
export const selectCartItemsCount = createSelector(
   [selectCartItems], 
   cartItems=>cartItems.reduce((accumulatedQty, cartItem)=>accumulatedQty+ cartItem.quantity,0)
);

export const selectCartTotalCost= createSelector(
    [selectCartItems],
     cartItems=>cartItems.reduce((accumulatedCost, cartItem)=>accumulatedCost + (cartItem.price*cartItem.quantity),0) 
);
