import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEMS,
  REMOVE_ITEM,
} from './cartActionTypes';

export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const addItem = item => ({ type: ADD_ITEM, payload: item });

export const clearItems = item => ({
  type: CLEAR_ITEMS,
  payload: item,
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item,
});
