import React from 'react';

import './CheckoutHeader.scss';

const CheckoutHeader = () => (
  <div className='checkout-header'>
    <div className='header-block'>
      <span>Product</span>
    </div>
    <div className='header-block hidden'>
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
);

export default CheckoutHeader;
