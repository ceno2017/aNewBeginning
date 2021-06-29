import React from "react";
import {connect} from 'react-redux';

import CartItem from '../cart-Item/cart-Item.component';
import CustomButton from "../custom-button/custom-button.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";

import "./cart-Dropdown.styles.scss";

const CartDropdown = ({cartItems})=>(
  <div className="cart-dropdown">
    <div className="cart-items">
     {
       cartItems.map(cartItem=><CartItem key={cartItems.id} myItem={cartItem} />)
     }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>  
);

const mapStateToProps = state=>({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);