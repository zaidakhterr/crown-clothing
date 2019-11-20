import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { setCurrentUser } from './redux/actions/userActions';

import './App.scss';

class App extends Component {
  componentDidMount = () => {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(null);
      }
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };

  render = () => {
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
  };
}

// const Dispatch = dispatch => ({
//   setUser: user => dispatch(setUser(user)),
// });

const Dispatch = { setCurrentUser };

export default connect(null, Dispatch)(App);
