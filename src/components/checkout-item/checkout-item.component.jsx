import React from "react";
import {connect} from "react-redux";

import {removeCartItem,addCartItem,removeSingleCartItem} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";


const CheckoutItem = ({cartItem,clearItem,addItem,removeSingleItem})=>{
  const{name,quantity,price,imageUrl}  = cartItem;
return(
    <div className='checkout-item'>
        <div className="image-container">
          <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          <div className='arrow' onClick={()=>removeSingleItem(cartItem)}>&#10094;</div>
           <span className='quantity'>{quantity}</span> 
          <div className='arrow' onClick={()=>addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <span className='remove-button' onClick={()=>clearItem(cartItem)}>&#10006;</span>
    </div>
)}
const mapDispatchToProps = dispatch=>({
    clearItem: item=>dispatch(removeCartItem(item)),
    addItem: item=>dispatch(addCartItem(item)),
    removeSingleItem: item=>dispatch(removeSingleCartItem(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);