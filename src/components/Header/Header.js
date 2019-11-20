import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebaseUtils';
import CartIcon from '../CartIcon/CartIcon';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

function Header({ currentUser }) {
  return (
    <div className='header' id='top-nav'>
      <NavLink
        exact
        className='logo-container'
        activeClassName='logo-container-active'
        to='/'>
        <Logo className='logo' />
      </NavLink>
      <div className='options header-active'>
        <NavLink
          exact
          className='option'
          activeClassName='option-active'
          to='/shop'>
          SHOP
        </NavLink>
        <NavLink
          exact
          className='option'
          activeClassName='option-active'
          to='/contact'>
          CONTACT
        </NavLink>
        {currentUser ? (
          <NavLink to='#' className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink
            exact
            className='option'
            activeClassName='option-active'
            to='/sign-in'>
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </div>
    </div>
  );
}

const State = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(State, null)(Header);
