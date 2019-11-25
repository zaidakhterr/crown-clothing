import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEMS,
  REMOVE_ITEM,
} from './cartActionTypes';
import { addItemToCart, removeItemFromCart } from './cartUtility';

const initialState = {
  hidden: true,
  cartItems: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };

    case CLEAR_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== payload.id
        ),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };

    default:
      return state;
  }
};
