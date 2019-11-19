import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebaseUtils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

function Header({ user }) {
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
        {user ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <NavLink
            exact
            className='option'
            activeClassName='option-active'
            to='/sign-in'>
            SIGN IN
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
