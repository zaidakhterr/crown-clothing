import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutHeader from '../../components/CheckoutHeader/CheckoutHeader';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors';

import './CheckoutPage.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <CheckoutHeader />
    {cartItems.map(item => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
