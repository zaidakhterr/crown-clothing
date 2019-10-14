import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

function Header() {
  return (
    <div className='header'>
      <NavLink
        exact
        className='logo-container'
        activeClassName='logo-container-active'
        to='/'>
        <Logo className='logo' />
      </NavLink>
      <div className='options'>
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
        <NavLink
          exact
          className='option'
          activeClassName='option-active'
          to='/sign-in'>
          SIGN IN
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
