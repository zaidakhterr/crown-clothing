import React from 'react';

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
  </div>
);

export default CollectionItem;
