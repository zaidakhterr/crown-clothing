import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CollectionPage from '../CollectionPage/CollectionPage';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';

import './ShopPage.scss';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Switch>
      <Route exact path={match.path} render={() => <CollectionOverview />} />
      <Route
        path={`${match.path}/:collection`}
        render={props => <CollectionPage {...props} />}
      />
    </Switch>
  </div>
);

export default ShopPage;
