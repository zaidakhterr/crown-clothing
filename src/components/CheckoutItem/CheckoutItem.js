import React from 'react';
import { connect } from 'react-redux';

import { removeItem } from '../../redux/cart/cartActions';

import './CheckoutItem.scss';

const CheckoutItem = ({ item, removeItem }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name under-img'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <button className='remove-button' onClick={() => removeItem(item)}>
        &#10006;
      </button>
    </div>
  );
};

const mapDispatchToProps = { removeItem };

export default connect(null, mapDispatchToProps)(CheckoutItem);
