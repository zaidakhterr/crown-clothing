import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, routeName, items, history, match }) => (
  <div className='collection-preview'>
    <button
      className='title'
      onClick={() => history.push(`${match.url}/${routeName}`)}>
      {title}
    </button>
    <div className='preview'>
      {items
        .filter((item, i) => i < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
