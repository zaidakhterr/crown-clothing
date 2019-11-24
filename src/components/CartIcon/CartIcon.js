import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import { ReactComponent as ShoppinIcon } from '../../assets/shoppingBag.svg';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <button className='cart-icon' onClick={() => toggleCartHidden()}>
    <ShoppinIcon className='shopping-icon' />
    <span>{itemCount}</span>
  </button>
);

const mapDispatchToProps = { toggleCartHidden };

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
