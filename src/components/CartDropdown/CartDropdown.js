import React from 'react';

import Button from '../Button/Button';

import './CartDropdown.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
