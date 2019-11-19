import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';

import './App.scss';

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              user: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      } else {
        this.setState({ user: null });
      }
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };

  render = () => {
    return (
      <div className='app' id='app'>
        <Header user={this.state.user} />
        <Switch>
          <Route exact path='/' render={() => <HomePage />} />
          <Route exact path='/shop' render={() => <ShopPage />} />
          <Route exact path='/sign-in' render={() => <SignInPage />} />
          <Route path='*' render={() => <h1>404 : Not Found</h1>} />
        </Switch>
      </div>
    );
  };
}

export default App;
