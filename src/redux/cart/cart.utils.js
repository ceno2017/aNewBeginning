export const addItemToCart = (cartItems, cartItemToAdd)=>
{
    //1. if it does not exist find() returns null which evaluates to false
    const existingCartItem = cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id);
    //2.
    if(existingCartItem){
        return cartItems.map(cartItem=>cartItem.id===cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity+1}: cartItem)
    }
    //3.
   return [...cartItems, {...cartItemToAdd, quantity: 1}];
}