import { SET_CURRENT_USER } from './userActionTypes';

const initialState = {
  currentUser: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};
