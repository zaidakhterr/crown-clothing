import React from 'react';

import { ReactComponent as ShoppinIcon } from '../../assets/shoppingBag.svg';

import './CartIcon.scss';

const CartIcon = () => (
  <button className='cart-icon'>
    <ShoppinIcon className='shopping-icon' />
    <span>0</span>
  </button>
);

export default CartIcon;
