import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cartActions';

import { ReactComponent as ShoppinIcon } from '../../assets/shoppingBag.svg';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <button className='cart-icon' onClick={() => toggleCartHidden()}>
    <ShoppinIcon className='shopping-icon' />
    <span>0</span>
  </button>
);

const Dispatch = { toggleCartHidden };

export default connect(null, Dispatch)(CartIcon);
