import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebaseUtils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = ({ currentUser, hidden }) => (
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
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, null)(Header);
