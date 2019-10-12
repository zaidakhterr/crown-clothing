import React from 'react';

import './CollectionItem.scss';

function CollectionItem({ name, price, imageUrl }) {
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
        <span className='price'>{price}</span>
      </div>
    </div>
  );
}

export default CollectionItem;
