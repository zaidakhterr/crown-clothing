import { TOGGLE_CART_HIDDEN, ADD_ITEM } from './cartActionTypes';

export const toggleCartHidden = () => dispatch =>
  dispatch({ type: TOGGLE_CART_HIDDEN });

export const addItem = item => dispatch => {
  dispatch({ type: ADD_ITEM, payload: item });
};

//utility function
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { ...cartItem }
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
