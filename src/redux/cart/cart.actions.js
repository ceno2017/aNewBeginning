import cartActionTypes from './cart.types';

//payload property is optional
export const toggleCartHidden = ()=>({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItem = item=>({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});
