import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';
import Button from '../Button/Button';

import './CollectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>Rs.{price}</span>
      </div>
      <Button inverted onClick={() => addItem(item)}>
        ADD TO CART
      </Button>
    </div>
  );
};

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(CollectionItem);
