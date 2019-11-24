import React from 'react';

import './CheckoutItem.scss';

const CheckoutItem = ({ item: { imageUrl, name, quantity, price } }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt={name} />
    </div>
    <span className='name under-img'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <button className='remove-button'>&#10006;</button>
  </div>
);

export default CheckoutItem;
