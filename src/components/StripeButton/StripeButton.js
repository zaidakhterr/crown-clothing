import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './StripeButton.scss';

const StripeButton = ({ price }) => {
  const priceInCents = price * 0.0065 * 100;
  const publishableKey = 'pk_test_6ivJc1gb76j6VatC5U7XPj6g00KwlnFp4k';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesfull');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CROWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='http://svgshare.com/i/CUz.svg'
      description={`Your total is Rs.${price}`}
      amount={priceInCents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
