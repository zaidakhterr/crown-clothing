import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { setCurrentUser } from './redux/user/userActions';

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
    const { currentUser } = this.props;

    return (
      <div className='app' id='app'>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <HomePage />} />
          <Route exact path='/shop' render={() => <ShopPage />} />
          <Route
            exact
            path='/sign-in'
            render={() => (currentUser ? <Redirect to='/' /> : <SignInPage />)}
          />
          <Route path='*' render={() => <h1>404 : Not Found</h1>} />
        </Switch>
      </div>
    );
  };
}

// const Dispatch = dispatch => ({
//   setUser: user => dispatch(setUser(user)),
// });

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = { setCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);
