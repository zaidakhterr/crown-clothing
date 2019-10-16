import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Header from './components/Header/Header';

import './App.scss';

function App() {
  return (
    <div className='app' id='app'>
      <Header />
      <Switch>
        <Route exact path='/' render={() => <HomePage />} />
        <Route exact path='/shop' render={() => <ShopPage />} />
        <Route exact path='/sign-in' render={() => <SignInPage />} />
        <Route path='*' render={() => <h1>404 : Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
