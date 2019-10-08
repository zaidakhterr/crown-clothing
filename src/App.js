import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

import './App.scss';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/' render={() => <HomePage />} />
        <Route exact path='/hats' render={() => <HatsPage />} />
        <Route path='*' render={() => <h1>Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
