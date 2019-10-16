import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

function ToggleClass() {
  let header = document.getElementById('top-nav');
  let app = document.getElementById('app');

  if (header.className === 'header') {
    header.className += ' responsive';
  } else {
    header.className = 'header';
  }

  if (app.className === 'app') {
    app.className += ' fixed';
  } else {
    app.className = 'app';
  }
}

function ToggleHome() {
  let header = document.getElementById('top-nav');
  let app = document.getElementById('app');
  header.className = 'header';
  app.className = 'app';
}

function Header() {
  return (
    <div className='header' id='top-nav'>
      <NavLink
        exact
        className='logo-container'
        activeClassName='logo-container-active'
        to='/'
        onClick={ToggleHome}>
        <Logo className='logo' />
      </NavLink>
      <div className='options header-active'>
        <NavLink
          exact
          className='option'
          activeClassName='option-active'
          to='/shop'
          onClick={ToggleClass}>
          SHOP
        </NavLink>
        <NavLink
          exact
          className='option'
          activeClassName='option-active'
          to='/contact'
          onClick={ToggleClass}>
          CONTACT
        </NavLink>
        <NavLink
          exact
          className='option'
          activeClassName='option-active'
          to='/sign-in'
          onClick={ToggleClass}>
          SIGN IN
        </NavLink>
      </div>
      <div className='burger' onClick={ToggleClass}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </div>
  );
}

export default Header;
