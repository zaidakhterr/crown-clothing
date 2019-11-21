import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';

import { ReactComponent as ShoppinIcon } from '../../assets/shoppingBag.svg';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <button className='cart-icon' onClick={() => toggleCartHidden()}>
    <ShoppinIcon className='shopping-icon' />
    <span>{itemCount}</span>
  </button>
);

const mapDispatchToProps = { toggleCartHidden };

const mapStateToProps = ({ cart }) => ({
  itemCount: cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
