import React from 'react';
import { connect } from 'react-redux';

import { clearItems, addItem, removeItem } from '../../redux/cart/cartActions';

import './CheckoutItem.scss';

const CheckoutItem = ({ item, clearItems, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name under-img'>{name}</span>
      <span className='quantity'>
        <button className='arrow' onClick={() => removeItem(item)}>
          &#10096;
        </button>
        <span>{quantity}</span>
        <button className='arrow' onClick={() => addItem(item)}>
          &#10097;
        </button>
      </span>
      <span className='price'>{price}</span>
      <button className='remove-button' onClick={() => clearItems(item)}>
        &#10006;
      </button>
    </div>
  );
};

const mapDispatchToProps = { clearItems, addItem, removeItem };

export default connect(null, mapDispatchToProps)(CheckoutItem);
