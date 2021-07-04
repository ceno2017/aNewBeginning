import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_jOROfn5CM8LBPAyiCoQmUYF600bViEZwEt';
    
    const onToken = token => {
        console.log(token);
        alert('Payment was successful');
    }
    return(
        <StripeCheckout 
          label='Pay Now'
          name='React Ecommerce App'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishablekey}
         />
    )
}

export default StripeCheckoutButton;