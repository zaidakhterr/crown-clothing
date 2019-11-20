import React from 'react';
import Button from '../Button/Button';

import './CollectionItem.scss';

const CollectionItem = ({ name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <Button inverted>ADD TO CART</Button>
  </div>
);

export default CollectionItem;
