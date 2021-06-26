import cart_Hidden from './cart.types';

//payload property is optional
export const toggleCartHidden = ()=>({
    type: cart_Hidden.TOGGLE_CART_HIDDEN,
});

export default toggleCartHidden;