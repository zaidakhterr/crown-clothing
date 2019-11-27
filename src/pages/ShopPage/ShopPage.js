import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopCollection } from '../../redux/shop/shopSelectors';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import './ShopPage.scss';

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollection,
});

export default connect(mapStateToProps)(ShopPage);
