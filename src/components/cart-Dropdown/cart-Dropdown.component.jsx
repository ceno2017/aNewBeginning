import React from "react";
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from '../cart-Item/cart-Item.component';
import CustomButton from "../custom-button/custom-button.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import "./cart-Dropdown.styles.scss";

//withRouter HOC lets us have access to match, history and location
const CartDropdown = ({cartItems,history,dispatch})=>(
  <div className="cart-dropdown">
    <div className="cart-items">
     {
       cartItems.length ?
       (cartItems.map(cartItem=><CartItem key={cartItem.id} myItem={cartItem} />)):
       (<span className="empty-message">Your cart is empty</span>)
     }
    </div>
    <CustomButton onClick={()=>{history.push('/checkout');
   dispatch(toggleCartHidden());
  }}>GO TO CHECKOUT</CustomButton>
  </div>  
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
//with connect we have access to the dispatch function...it's not only with  mapDispatchToProps
export default withRouter(connect(mapStateToProps)(CartDropdown));