import React, { Component } from 'react';
import shopData from './ShopPage.data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import './ShopPage.scss';

export class ShopPage extends Component {
  state = {
    collections: shopData,
  };

  render = () => {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  };
}

export default ShopPage;
