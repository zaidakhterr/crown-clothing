import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollection } from '../../redux/shop/shopSelectors';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import './CollectionPage.scss';

const CollectionPage = ({ collection: { title, items } }) => (
  <div className='collection-page'>
    <h1>{title}</h1>
    <div className='collection'>
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) =>
  createStructuredSelector({
    collection: selectCollection(ownProps.match.params.collection),
  });

export default connect(mapStateToProps)(CollectionPage);
