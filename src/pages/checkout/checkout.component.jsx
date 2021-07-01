import React from "react";
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";

import {selectCartTotalCost,selectCartItems} from "../../redux/cart/cart.selectors";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import "./checkout.styles.scss";

const Checkout = ({totalCost,cartItems})=>(
    <div className='checkout-page'>
     <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${totalCost}</div>
  </div>
);
const mapStateToProps = createStructuredSelector({
    totalCost:selectCartTotalCost,
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(Checkout);