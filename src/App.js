import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' render={() => <HomePage />} />
        <Route exact path='/shop' render={() => <ShopPage />} />
        <Route path='*' render={() => <h1>Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
