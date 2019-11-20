import { TOGGLE_CART_HIDDEN } from '../actions/';

const initialState = { hidden: true };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};
