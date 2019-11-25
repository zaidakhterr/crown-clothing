import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM } from './cartActionTypes';
import { addItemToCart } from './cartUtility';

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

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== payload.id
        ),
      };

    default:
      return state;
  }
};
